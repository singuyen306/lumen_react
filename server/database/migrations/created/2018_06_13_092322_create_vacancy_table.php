<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVacancyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jjob_vacancies', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';

            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('work_status_id')->unsigned();
            $table->integer('level_id')->unsigned();
            $table->integer('city_id')->unsigned();
            $table->integer('country_id')->unsigned();
            $table->integer('source_id')->unsigned();
            $table->string('email')->nullable();
            $table->string('name')->nullable();
            $table->string('mobile', 50)->nullable();
            $table->string('skype')->nullable();
            $table->string('facebook_profile_url')->nullable();
            $table->string('linked_profile_url')->nullable();
            $table->string('address')->nullable();
            $table->date('birthday');
            $table->string('current_salary')->nullable();
            $table->string('expected_salary')->nullable();
            $table->string('avatar')->nullable();
            $table->string('file_import')->nullable();
            $table->tinyInteger('sex')->comment('0: Nữ, 1: Nam');
            $table->tinyInteger('married')->comment('0: single, 1: married');
            $table->tinyInteger('status')->default(0);
            $table->tinyInteger('deleted_flag')->default(0)->comment('1: deleted');
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jjob_vacancies');
    }
}
