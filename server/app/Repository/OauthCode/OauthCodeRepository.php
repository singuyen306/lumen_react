<?php
namespace App\Repository\OauthCode;

use App\Model\OauthCode;
use App\Repository\BaseRepository;

class OauthCodeRepository extends BaseRepository implements OauthCodeInterface
{

    public function getModel()
    {
        return OauthCode::class;
    }
}