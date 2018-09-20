<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once '../../Datos/dbCon.php';
include_once '../../Modelos/Ciudades.php';

$database = new Database();
$db = $database->getConnection();

$ciudad = new Ciudad($db);

$idDep= isset($_GET['id']) ? $_GET['id'] : die();

$stmt = $ciudad->leer($idDep);
$num = $stmt->rowCount();

if($num>0){
    $ciudades_arr=array();
    $ciudades_arr["records"]=array();
    array_push($ciudades_arr["records"], array("id_municipio" => "0","municipio" => "--Seleccione--", "estado" => "1","departamento_id" => "0" ));
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $ciudad_item=array(
            "id_municipio" => $id_municipio,
            "municipio" => $municipio,
            "estado" => $estado,
            "departamento_id" => $departamento_id
        );
        array_push($ciudades_arr["records"], $ciudad_item);
    }
    echo json_encode($ciudades_arr);}
else{
    echo json_encode(
        array("message" => "No se encontraron Ciudades")
    );
}
