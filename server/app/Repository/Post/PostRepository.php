<?php
namespace App\Repository\Post;

use App\Model\Post;
use App\Repository\BaseRepository;
use App\Common\Constant;

class PostRepository extends BaseRepository implements PostInterface
{

    public function getModel()
    {
        return Post::class;
    }

    /*
     * get all post with paginate
     */
    public function getAllPostPagination($perPage = 12){
        return $this->model
                    ->join(Constant::USER_TABLE, Constant::POST_TABLE.'.user_id', Constant::USER_TABLE.'.id')
                    ->select([
                        Constant::POST_TABLE.'.id',
                        Constant::POST_TABLE.'.title',
                        Constant::POST_TABLE.'.cover',
                        Constant::POST_TABLE.'.body',
                        Constant::POST_TABLE.'.created_at',
                        Constant::USER_TABLE.'.name',
                    ])
                    ->where(Constant::POST_TABLE.'.approved', 1)
                    ->orderBy(Constant::POST_TABLE.'.id', 'DESC')
                    ->paginate($perPage);
    }
    /*
     * get all post
     */
    public function getAllPost(){
        return $this->model
            ->join(Constant::USER_TABLE, Constant::POST_TABLE.'.user_id', Constant::USER_TABLE.'.id')
            ->select([
                Constant::POST_TABLE.'.id',
                Constant::POST_TABLE.'.title',
                Constant::POST_TABLE.'.cover',
                Constant::POST_TABLE.'.body',
                Constant::POST_TABLE.'.created_at',
                Constant::POST_TABLE.'.updated_at',
                Constant::POST_TABLE.'.approved',
                Constant::USER_TABLE.'.name',
            ])
            ->orderBy(Constant::POST_TABLE.'.id', 'DESC')
            ->get();
    }

    /*
     * get post detail
     */
    public function getPostDetail($postId){
        return $this->model
            ->join(Constant::USER_TABLE, Constant::POST_TABLE.'.user_id', Constant::USER_TABLE.'.id')
            ->select([
                Constant::POST_TABLE.'.id',
                Constant::POST_TABLE.'.title',
                Constant::POST_TABLE.'.cover',
                Constant::POST_TABLE.'.body',
                Constant::POST_TABLE.'.created_at',
                Constant::USER_TABLE.'.name',
            ])
            ->where(Constant::POST_TABLE.'.approved', 1)
            ->where(Constant::POST_TABLE.'.id', $postId)
            ->first();
    }
}