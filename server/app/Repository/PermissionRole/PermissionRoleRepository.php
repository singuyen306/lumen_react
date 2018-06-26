<?php
namespace App\Repository\PermissionRole;

use App\Model\PermissionRole;
use App\Repository\BaseRepository;

class PermissionRoleRepository extends BaseRepository implements PermissionRoleInterface
{

    public function getModel()
    {
        return PermissionRole::class;
    }
}