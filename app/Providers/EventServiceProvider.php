<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];
    public function register()
    {
        #bind:Repository
		$this->app->bind('App\Repository\Article\ArticleRepositoryInterface','App\Repository\Article\ArticleRepository');
		$this->app->bind('App\Repository\Category\CategoryRepositoryInterface','App\Repository\Category\CategoryRepository');
		$this->app->bind('App\Repository\User\UserRepositoryInterface','App\Repository\User\UserRepository');
    }
    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
