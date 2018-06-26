<?php

namespace App\Http\Controllers\Component;

use Laravel\Passport\PersonalAccessTokenFactory;
use Laravel\Passport\PersonalAccessTokenResult;

class PersonalAccessTokenFactoryCustom extends PersonalAccessTokenFactory
{
  public function makeCustom($userId, $name, array $scopes = [])
  {
    $response = $this->dispatchRequestToAuthorizationServer(
        $this->createRequest($this->clients->personalAccessClient(), $userId, $scopes)
    );

    $token = tap($this->findAccessToken($response), function ($token) use ($userId, $name) {
      $this->tokens->save($token->forceFill([
          'user_id' => $userId,
          'name' => $name
      ]));
    });

    return new PersonalAccessTokenResult(
        $response['access_token'], $token
    );
  }

}
