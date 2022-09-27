<?php
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");
    // header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

    include_once "conexao.php";

    $response_json = file_get_contents("php://input");
    $dados = json_decode($response_json, true);
    if($dados){
        $nome_usuario = $dados['usuario']['nome_usuario'];
        $senha = $dados['usuario']['senha'];
        
        $query_usuario = "SELECT id,nome_usuario, senha from usuario WHERE nome_usuario = '$nome_usuario' AND senha = '$senha'; ";
        $cad_usuario = mysqli_query($conn, $query_usuario);
        
        if(mysqli_num_rows($cad_usuario) > 0){
            while($user = mysqli_fetch_array($cad_usuario)){
                $response = [
                    "id" => $user['id'],
                    "usuario" => $user['nome_usuario'],
                    "senha" => $user['senha'],
                    "erro" => false,
                ]; 
            }
        }else{
            $response = [
                "error" => true,
                "mensagem" => "Usuário ou senha não encontrado"
            ];
        }
    }else{
        $response = [
            "error" => true,
            "mensagem" => "Usuário ou senha não encontrado"
        ];
    }

echo json_encode($response);
