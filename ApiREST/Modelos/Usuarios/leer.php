<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../Datos/dbCon.php';
include_once '../../Modelos/Usuarios.php';

$database = new Database();
$db = $database->getConnection();

$usuario = new Usuario($db);

$stmt = $usuario->leer();
$num = $stmt->rowCount();

if($num>0){
    $usuarios_arr=array();
    $usuarios_arr["records"]=array();     
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row); 
        $usuario_item=array(
            "id" => $id,
            "nombre" => $nombre,
            "correo" => $correo,
            "sarlaft" => $sarlaft,
            "cedula" => $cedula
        ); 
        array_push($usuarios_arr["records"], $usuario_item);
    } 
    echo json_encode($usuarios_arr);} 
else{
    echo json_encode(
        array("message" => "No se encontraron Usuarios")
    );
}
