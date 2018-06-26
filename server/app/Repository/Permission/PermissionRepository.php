<?php
namespace App\Repository\Permission;

use App\Model\Permission;
use App\Repository\BaseRepository;

class PermissionRepository extends BaseRepository implements PermissionInterface
{

    public function getModel()
    {
        return Permission::class;
    }
}