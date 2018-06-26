<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Repository\OauthClient\OauthClientInterface;
use App\Repository\User\UserInterface;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;

class AuthController extends ApiController
{
    private $oauthClient;

    public function __construct(
        OauthClientInterface $oauthClient,
        UserInterface $user
    )
    {
        $this->user = $user;
        $this->oauthClient = $oauthClient;
    }

    /*
     * request login
     * return @access_token
     */
    public function login(LoginRequest $request){
        try{
            $email = $request->email;
            $password = $request->password;

            $user = $this->user->findBy('email', $email);
            if(!empty($user) && Hash::check($password, $user->password)){
                //create oauth client if not existed.
                $oauthClient = $this->oauthClient->findBy('user_id', $user->id);
                if(empty($oauthClient)){
                    $oauthClient = $this->createOauthClient($user->id);
                }
                //generate access token
                $token = $this->generateAccessToken($email, $password, $oauthClient->id, $oauthClient->secret);
                $token = json_decode((string) $token->getBody());

                $this->response['expires_in'] = $token->expires_in;
                $this->response['access_token'] = $token->access_token;
                $this->response['refresh_token'] = $token->refresh_token;

                return $this->sendResponseSuccess($user);
            }else{
                return $this->sendResponseUnAuthorized();
            }
        }catch (\Exception $e){
            return $this->sendResponseInternalError();
        }
    }

    /*
     * create oauth client
     */
    private function createOauthClient($userId){
        $data = [
            'user_id'   => $userId,
            'name'      => '',
            'secret'    => str_random(40),
            'password_client' => 1,
            'personal_access_client' => 0,
            'redirect'  => '',
            'revoked'   => 0
        ];

        return $this->oauthClient->create($data);
    }

    /*
     * generation access token
     */
    private function generateAccessToken($email, $password, $clientId, $clientSecret){
        try{
            $http = new Client();
            $domain = URL::to('/');

            $token = $http->post($domain . '/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $clientId,
                    'client_secret' => $clientSecret,
                    'username' => $email,
                    'password' => $password,
                    'scope' => '',
                ]
            ]);

            return $token;
        }catch (\Exception $e){
            return $this->sendResponseInternalError();
        }
    }
}
