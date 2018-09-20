<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once '../../Datos/dbCon.php';
include_once '../../Modelos/Usuarios.php';

$database = new Database();

$db = $database->getConnection(); 

$usuario = new Usuario($db);

$usuario->cedula = isset($_GET['cedula']) ? $_GET['cedula'] : die();

$usuario->leeruno(); 

$usuario_arr=array(
    "id" => $usuario->id,
    "nombre" => $usuario->nombre,
    "correo" => $usuario->correo,
    "sarlaft" => $usuario->sarlaft,
    "cedula" => $usuario->cedula
);
print_r(json_encode($usuario_arr));
