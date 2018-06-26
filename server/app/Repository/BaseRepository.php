<?php

namespace App\Repository;

abstract class BaseRepository implements RepositoryInterface {

    /**
     * @var $model
     */
    protected $model;
    /**
     * EloquentRepository constructor.
     */
    public function __construct()
    {
        $this->setModel();
    }

    /**
     * set reponsitory instant
     */
    public function setModel()
    {
        $this->model = app()->make(
            $this->getModel()
        );
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->model->findOrFail($id);
    }

    /**
     * @param array $columns
     * @return mixed
     */
    public function all($orderBy = 'id desc',$columns = array('*'))
    {
        return $this->model->orderByRaw($orderBy)->get($columns);
    }

    /**
     * @param int $perPage Per page
     * @param array $columns Array Columns
     * @return array Return data paginate
     */
    public function paginate($perPage = 15, $columns = array('*'))
    {
        return $this->model->paginate($perPage, $columns);
    }

    /**
     * @param array $data Array data
     * @return void
     */
    public function create(array $data)
    {
        return $this->model->create($data);
    }

    /**
     * @param array $data Array data
     * @param $id ID
     * @param string $attribute Attribute
     * @return void
     */
    public function update(array $data, $id, $attribute = "id")
    {
         return $this->model->where($attribute, $id)->update($data);
    }

    /**
     * @param $id ID
     * @return void
     */
    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    /**
     * @param $id ID
     * @param array $columns Columns
     * @return array Return array
     */
    public function find($id, $columns = array('*'))
    {
        return $this->model->find($id, $columns);
    }

    /**
     * @param $attribute Attribute
     * @param $value Value
     * @param array $columns Columns
     * @return array Array
     */
    public function findBy($attribute, $value, $columns = array('*'))
    {
        return $this->model->where($attribute, $value)->first($columns);
    }

    public function findByReturnArray($attribute, $value, $columns = array('*'))
    {
        return $this->model->where($attribute, $value)->get($columns);
    }

    public function findByReturnArrayPlug($attribute, $value, $pluck, $columns = array('*') )
    {
        return $this->model->where($attribute, $value)->get($columns)->pluck($pluck);
    }
    public function findByMultiConditionsLimit($whereData = array(), $columns = array('*'))
    {
        return $this->model->where($whereData)->first($columns);
    }

    /**
     * @param array $whereData
     * @return mixed
     */

    public function delByMultiConditionsModel($whereData = array())
    {
        return $this->model
            ->where($whereData)
            ->delete();
    }


    /**
     * update records by multi conditions
     *
     * @param $tableName Table name
     * @param array $data Array data
     * @param array $whereData Array where data
     * @return void
     */
    public function updateByMultiConditionsModel(array $data, $whereData = array())
    {
        return $this->model
            ->where($whereData)
            ->update($data);
    }

    /**
     * @param array $whereData
     * @return mixed
     */
    public function countByMultiConditionsModel($whereData = array())
    {
        return $this->model
            ->where($whereData)
            ->count();
    }



    /**
     * @param array $whereData
     * @param string $orderBy
     * @param array $select
     * @return mixed
     */
    public function getByMultiConditionsModel($whereData = array(), $orderBy = "id desc", $select=array("*") ) {

        return $this->model
            ->select($select)
            ->where($whereData)
            ->orderByRaw($orderBy)
            ->get();
    }
    
    public function deleteByMultiConditions($whereData = array())
    {
        return $this->model
            ->where($whereData)
            ->delete();
    }
    
    public function findByMultiConditionsModelLimit($whereData = array(), $orderBy = "id asc")
    {
        return $this->model
            ->where($whereData)
            ->orderByRaw($orderBy)
            ->first();
    }

    public function updateOrCreateModel($whereData = array(), $data = array()) {
        return $this->model
            ->updateOrCreate(
                $whereData,
                $data
            );
    }
}
