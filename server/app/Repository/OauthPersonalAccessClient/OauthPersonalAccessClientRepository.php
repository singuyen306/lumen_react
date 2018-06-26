<?php
namespace App\Repository\OauthPersonalAccessClient;

use App\Model\OauthPersonalAccessClient;
use App\Repository\BaseRepository;

class OauthPersonalAccessClientRepository extends BaseRepository implements OauthPersonalAccessClientInterface
{

    public function getModel()
    {
        return OauthPersonalAccessClient::class;
    }
}