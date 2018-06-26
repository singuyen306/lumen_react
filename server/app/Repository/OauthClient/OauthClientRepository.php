<?php
namespace App\Repository\OauthClient;

use App\Model\OauthClient;
use App\Repository\BaseRepository;

class OauthClientRepository extends BaseRepository implements OauthClientInterface
{

    public function getModel()
    {
        return OauthClient::class;
    }
}