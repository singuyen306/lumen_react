<?php

namespace App\Providers;

use App\Repository\OauthAccessToken\OauthAccessTokenInterface;
use App\Repository\OauthAccessToken\OauthAccessTokenRepository;
use App\Repository\OauthClient\OauthClientInterface;
use App\Repository\OauthClient\OauthClientRepository;
use App\Repository\OauthCode\OauthCodeInterface;
use App\Repository\OauthCode\OauthCodeRepository;
use App\Repository\OauthPersonalAccessClient\OauthPersonalAccessClientInterface;
use App\Repository\OauthPersonalAccessClient\OauthPersonalAccessClientRepository;
use App\Repository\OauthRefreshToken\OauthRefreshTokenInterface;
use App\Repository\OauthRefreshToken\OauthRefreshTokenRepository;
use App\Repository\Permission\PermissionInterface;
use App\Repository\Permission\PermissionRepository;
use App\Repository\PermissionRole\PermissionRoleInterface;
use App\Repository\PermissionRole\PermissionRoleRepository;
use App\Repository\Post\PostInterface;
use App\Repository\Post\PostRepository;
use App\Repository\Role\RoleInterface;
use App\Repository\Role\RoleRepository;
use App\Repository\User\UserInterface;
use App\Repository\User\UserRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //load passport route
	    \Dusterio\LumenPassport\LumenPassport::routes($this->app);
        \Dusterio\LumenPassport\LumenPassport::tokensExpireIn(\Carbon\Carbon::now()->addDays(60), 2);

        //load repositories
        $this->app->bind(OauthClientInterface::class, OauthClientRepository::class);
        $this->app->bind(OauthAccessTokenInterface::class, OauthAccessTokenRepository::class);
        $this->app->bind(OauthRefreshTokenInterface::class, OauthRefreshTokenRepository::class);
        $this->app->bind(OauthCodeInterface::class, OauthCodeRepository::class);
        $this->app->bind(OauthPersonalAccessClientInterface::class, OauthPersonalAccessClientRepository::class);
        $this->app->bind(UserInterface::class, UserRepository::class);
        $this->app->bind(RoleInterface::class, RoleRepository::class);
        $this->app->bind(PostInterface::class, PostRepository::class);
        $this->app->bind(PermissionInterface::class, PermissionRepository::class);
        $this->app->bind(PermissionRoleInterface::class, PermissionRoleRepository::class);
    }
}
