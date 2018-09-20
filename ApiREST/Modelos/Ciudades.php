<?php
class Ciudad
{
    private $conn;
    private $table_name = "municipios";
    public $id_municipio;
    public $municipio;
    public $estado;
    public $departamento_id;
    public function __construct($db){
        $this->conn = $db;
    }
    function leer($idDep){
        $query = "SELECT * FROM " . $this->table_name . " where departamento_id= ? ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $idDep);
        $stmt->execute();
        return $stmt;
    }
}