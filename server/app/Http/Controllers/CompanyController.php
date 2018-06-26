<?php

namespace App\Http\Controllers;

use App\Repository\OauthClient\OauthClientInterface;
use App\Repository\User\UserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompanyController extends ApiController
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
     * request get list company
     * return @access_token
     */
    public function index(Request $request){
        try{
            $company = DB::table('jjob_customers')->limit(3)->get();

            return $this->sendResponseSuccess($company);

        }catch (\Exception $e){
            return $this->sendResponseInternalError();
        }
    }
}
