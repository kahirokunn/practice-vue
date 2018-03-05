<?php

namespace App\Http\Controllers;

class ShowErrorController extends Controller
{
    public function index()
    {
        this->no_method_error();
    }
}
