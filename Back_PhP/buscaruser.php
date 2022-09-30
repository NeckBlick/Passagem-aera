<?php
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");
    // header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

    include_once "conexao.php";
        $id = filter_input(INPUT_GET,'id', FILTER_SANITIZE_NUMBER_INT);
        
        $query_usuario = "SELECT * FROM usuario";
        $cad_usuario = mysqli_query($conn, $query_usuario);
        
        if(mysqli_num_rows($cad_usuario) > 0){
            while($voo = mysqli_fetch_array($cad_usuario)){
                $response[] = [
                    "id" => $voo['id'],
                    "nome" => $voo['nome'],
                    "user" => $voo['nome_usuario'],
                    "cpf" => $voo['cpf'],
                    "endereco" => $voo['endereco_completo'],
                    "endereco_comercial" => $voo['endereco_comercial'],
                    "telefone" => $voo['telefone'],
                    "email" => $voo['email'],
                    "data_nascimento" => $voo['data_nascimento'],
                    "rg" => $voo['rg'],
                    "emissao_rg" => $voo['data_emissao_rg'],
                    "uf" => $voo['orgao_emissor'],
                    "senha" => $voo['senha'],
                    "criacao" => $voo['criado_em'],
                    "error" => false
                ]; 
            }
        }else{
            $response = [
                "error" => true,
                "mensagem" => "Nenhum usuário encontrado"
            ];
        }
http_response_code(200);
echo json_encode($response);
