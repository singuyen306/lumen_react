<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVacancyJobTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jjob_recommend_vacancy_to_jobs', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';

            $table->increments('id');
            $table->integer('job_id')->unsigned();
            $table->integer('vacancy_id')->unsigned();
            $table->integer('status_job_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->text('message')->nullable();
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
        Schema::dropIfExists('jjob_recommend_vacancy_to_jobs');
    }
}