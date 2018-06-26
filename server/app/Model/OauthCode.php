<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OauthCode extends Model
{
    protected $table = 'oauth_auth_codes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = array();
}
