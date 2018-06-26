<?php
namespace App\Repository\Role;

use App\Model\Role;
use App\Repository\BaseRepository;

class RoleRepository extends BaseRepository implements RoleInterface
{

    public function getModel()
    {
        return Role::class;
    }
}