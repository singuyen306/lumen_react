<?php
namespace App\Repository\User;

use App\Model\User;
use App\Repository\BaseRepository;

class UserRepository extends BaseRepository implements UserInterface
{

    public function getModel()
    {
        return User::class;
    }
}