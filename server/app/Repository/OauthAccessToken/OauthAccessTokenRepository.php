<?php
namespace App\Repository\OauthAccessToken;

use App\Model\OauthAccessToken;
use App\Repository\BaseRepository;

class OauthAccessTokenRepository extends BaseRepository implements OauthAccessTokenInterface
{

    public function getModel()
    {
        return OauthAccessToken::class;
    }
}