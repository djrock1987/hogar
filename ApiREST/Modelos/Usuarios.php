<?php
class Usuario{ 
    private $conn;
    private $table_name = "usuarios";    
    public $id;
    public $nombre;
    public $correo;
    public $sarlaft;
    public $cedula;
    public function __construct($db){
        $this->conn = $db;
    }    
    function leer(){ 
        $query = "SELECT * FROM " . $this->table_name . " ";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    function leeruno(){ 
        $query = "SELECT * FROM " . $this->table_name . " WHERE cedula = ? LIMIT 0,1";

        $stmt = $this->conn->prepare( $query );

        $stmt->bindParam(1, $this->cedula);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->id = $row['id'];
        $this->nombre = $row['nombre'];
        $this->correo = $row['correo'];
        $this->sarlaft = $row['sarlaft'];
        $this->cedula = $row['cedula'];
    }
}   
