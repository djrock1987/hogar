<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../Datos/dbCon.php';
include_once '../../Modelos/Departamentos.php';

$database = new Database();
$db = $database->getConnection();

$departamento = new Departamento($db);

$stmt = $departamento->leer();
$num = $stmt->rowCount();

if($num>0){
    $departamentos_arr=array();
    $departamentos_arr["records"]=array();
    array_push($departamentos_arr["records"], array("id_departamento" => "0","departamento" => '--Seleccione--',"zona"=>"0" ));
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $departamento_item=array(
            "id_departamento" => $id_departamento,
            "departamento" => $departamento,
            "zona"=>$zona,
        );
        array_push($departamentos_arr["records"], $departamento_item);
    }
    echo json_encode($departamentos_arr);}
else{
    echo json_encode(
        array("message" => "No se encontraron Departamentos")
    );
}