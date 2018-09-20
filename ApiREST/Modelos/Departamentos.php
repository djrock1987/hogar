<?php
class Departamento
{
    private $conn;
    private $table_name = "departamentos";
    public $id_departamento;
    public $departamento;
    public $zona;
    public function __construct($db){
        $this->conn = $db;
    }
    function leer(){
        $query = "SELECT * FROM " . $this->table_name . " ";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}