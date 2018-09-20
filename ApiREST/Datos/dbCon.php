<?php
class Database{
	private $host = '70.32.106.136';
	private $db_name = "admin-coomeva";
   	private $username = "user-coomeva";
   	private $password = "Coomeva_colombia*";
   	public $conn;
   	public function getConnection(){ 
   		$this->conn = null; 
       	try{
           	$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
           	$this->conn->exec("set names utf8");
       	}catch(PDOException $exception){
           	echo "Connection error: " . $exception->getMessage();
       	}
   		return $this->conn;
   	}
}
