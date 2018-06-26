<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jjob_jobs', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';

            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('customer_id')->unsigned();
            $table->integer('job_status_id')->unsigned();
            $table->integer('job_level_id')->unsigned();
            $table->string('title');
            $table->text('overview')->nullable();
            $table->text('content')->nullable();
            $table->string('salary_range')->nullable();
            $table->string('file_job_description')->nullable();
            $table->tinyInteger('public')->default(0)->comment('0: Chỉ các Pic & member mới nhìn thấy, 1: Tất cả HR đều nhìn thấy');
            $table->tinyInteger('show_on_web')->default(0)->comment('1: Hiển thị trên website j-job.com.vn');
            $table->tinyInteger('deleted_flag')->default(0)->comment('1: deleted');
            $table->date('expired_at');
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
        Schema::dropIfExists('jjob_jobs');
    }
}
