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
        $cpf = $dados['usuario']['cpf'];
        $nome = $dados['usuario']['nome'];
        $nome_usuario = $dados['usuario']['nome_usuario'];
        $endereco_completo = $dados['usuario']['endereco_completo'];
        $telefone = $dados['usuario']['telefone'];
        $email = $dados['usuario']['email'];
        $endereco_comercial = $dados['usuario']['endereco_comercial'];
        $data_nascimento = $dados['usuario']['data_nascimento'];
        $rg = $dados['usuario']['rg'];
        $data_emissao_rg = $dados['usuario']['data_emissao_rg'];
        $orgao_emissor = $dados['usuario']['orgao_emissor'];
        $senha = $dados['usuario']['senha'];
        
        $query_usuario = "INSERT INTO usuario (cpf,nome,nome_usuario,endereco_completo,telefone,email,endereco_comercial,data_nascimento,rg,data_emissao_rg,orgao_emissor,criado_em,senha,compra_id,voo_do_user) VALUES ('$cpf','$nome','$nome_usuario','$endereco_completo','$telefone','$email','$endereco_comercial','$data_nascimento','$rg','$data_emissao_rg','$orgao_emissor',NOW(),'$senha',2,1)";
        $cad_usuario = mysqli_query($conn, $query_usuario);
        
        if(mysqli_insert_id($conn)){
            $response = [
                "error" => false,
                "mensagem" => "Usuário cadastrado com sucesso!"
            ];
        }else{
            $response = [
                "error" => true,
                "mensagem" => "Usuário não foi possivel cadastrar, tente novamente mais tarde"
            ];
        }
    }else{
        $response = [
            "error" => true,
            "mensagem" => "Usuário não foi possivel cadastrar, tente novamente mais tarde"
        ];
    }

    http_response_code(200);
    echo json_encode($response);
