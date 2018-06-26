<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response as HttpStatusCode;

class ApiController extends Controller
{
    /*
     * @var array
     */
    public $response = [];

    /*
     * $var object
     */
    public $user;

    /*
     * send response success
     */
    public function sendResponseSuccess($data = []){
        return $this->sendResponse('success', HttpStatusCode::HTTP_OK, $data);
    }

    /*
     * send response not found
     */
    public function sendResponseNotFound($message = 'Not Found'){
        return $this->sendResponse($message, HttpStatusCode::HTTP_NOT_FOUND);
    }

    /*
     * send response internal server error
     */
    public function sendResponseInternalError($message = 'Internal server error'){
        return $this->sendResponse($message, HttpStatusCode::HTTP_INTERNAL_SERVER_ERROR);
    }

    /*
     * send response unauthorized
     */
    public function sendResponseUnAuthorized($message = 'Unauthorized'){
        return $this->sendResponse($message, HttpStatusCode::HTTP_UNAUTHORIZED);
    }

    /*
     * send response validate error
     */
    public function sendResponseValidateError($message = 'Validation error', $errors = []){
        return $this->sendResponse($message, HttpStatusCode::HTTP_UNPROCESSABLE_ENTITY, $errors);
    }

    /*
     * send response
     */
    private function sendResponse($message = 'success', $statusCode = HttpStatusCode::HTTP_OK, $data = []){
        $this->response['message'] = $message;
        $this->response['status_code'] = $statusCode;
        $this->response['data'] = $data;

        return response()->json($this->response);
    }
}
