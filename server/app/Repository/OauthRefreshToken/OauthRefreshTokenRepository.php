<?php
namespace App\Repository\OauthRefreshToken;

use App\Model\OauthRefreshToken;
use App\Repository\BaseRepository;

class OauthRefreshTokenRepository extends BaseRepository implements OauthRefreshTokenInterface
{

    public function getModel()
    {
        return OauthRefreshToken::class;
    }
}