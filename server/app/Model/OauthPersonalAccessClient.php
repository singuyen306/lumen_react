<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OauthPersonalAccessClient extends Model
{
    protected $table = 'oauth_personal_access_clients';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = array();
}
