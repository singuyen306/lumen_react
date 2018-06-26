<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Model\City
 *
 * @property int $id
 * @property int $country_id
 * @property string|null $name
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @mixin \Eloquent
 * @property int $deleted_flag 1: deleted, 0: enabled
 */
class FileUploadFroala extends Model {

    protected $table = 'file_uploads_froala';
    protected $guarded = array();

}
