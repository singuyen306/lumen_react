<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jjob_customers', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';

            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('city_id')->nullable();
            $table->integer('company_size_')->unsigned();
            $table->integer('status_id')->default(2)->comment('1: touching, 2: contract');
            $table->string('name')->nullable();
            $table->string('slogan')->nullable();
            $table->string('phone', 100)->nullable();
            $table->string('logo')->nullable();
            $table->string('website')->nullable();
            $table->string('base_url')->nullable();
            $table->string('rate_fee')->nullable()->comment('Phí tuyển dụng');
            $table->text('description')->nullable()->comment('Đặc điểm công ty');
            $table->text('recruitment_culture')->nullable()->comment('Văn hoá tuyển dụng');
            $table->text('description_web')->nullable()->comment('Hiển thị trên website: j-job.com.vn');
            $table->text('warranty_terms')->comment('Điều khoản bảo hành');
            $table->tinyInteger('follow_flag')->default(0)->comment('0: un-follow, 1: following');
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
        Schema::dropIfExists('jjob_customers');
    }
}
