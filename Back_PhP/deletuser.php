<?php
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");
    // header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

    include_once "conexao.php";
        $id = filter_input(INPUT_GET,'id', FILTER_SANITIZE_NUMBER_INT);
        
        $query_usuario = "DELETE FROM usuario WHERE id=$id LIMIT 1";
        $cad_usuario = mysqli_query($conn, $query_usuario);
        $response = "";
        $response = [
            "erro" => false,
            "mensagem" => "Usuário apagado com sucesso",
            "id" => $id
        ];
http_response_code(200);
echo json_encode($response);
