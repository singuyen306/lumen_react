<?php
namespace App\Repository\FileUploadFroala;

use App\Model\FileUploadFroala;
use App\Repository\BaseRepository;

class FileUploadFroalaRepository extends BaseRepository implements FileUploadFroalaInterface
{
    public function getModel()
    {
        return FileUploadFroala::class;
    }


}