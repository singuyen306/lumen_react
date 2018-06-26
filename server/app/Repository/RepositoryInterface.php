<?php

namespace App\Repository;

/**
 * Description of RepositoryInterface
 *
 * @author MRS
 */
interface RepositoryInterface {

    /**
     * Get all column
     * @param array $columns
     */
    public function all($columns = array('*'));

    /**
     * paginate data
     * @param integer $perPage
     * @param array $columns
     */

    public function paginate($perPage = 15, $columns = array('*'));

    /**
     * create data
     * @param array $data
     */
    public function create(array $data);
    /**
     * update data
     * @param array $data
     * @param integer $id
     */

    public function update(array $data, $id);

    /**
     * delete data
     * @param integer $id
     */
    public function delete($id);

    /**
     * find data
     * @param integer $id
     * @param array $columns
     */
    public function find($id, $columns = array('*'));

    /**
     * findBy column
     * @param string $field
     * @param string $value
     * @param array $columns
     */
    public function findBy($field, $value, $columns = array('*'));

    /**
     * Get by id
     * @param integer $id
     */
    public function getById($id);
}
