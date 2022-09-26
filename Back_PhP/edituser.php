<?php
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");
    // header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

    include_once "conexao.php";
    $response_json = file_get_contents("php://input");
    
    $dados = json_decode($response_json, true);
    $id = filter_input(INPUT_GET,'id', FILTER_SANITIZE_NUMBER_INT);
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
        $query_usuario = "UPDATE usuario 
                        SET nome='$nome', cpf='$cpf', 
                        nome_usuario='$nome_usuario',
                        endereco_completo='$endereco_completo',
                        telefone='$telefone',
                        email='$email',
                        endereco_comercial='$endereco_comercial',
                        data_nascimento='$data_nascimento',
                        rg='$rg',
                        data_emissao_rg='$data_emissao_rg',
                        orgao_emissor='$orgao_emissor',
                        senha='$senha'
                        WHERE id='$id' ";
        $cad_usuario = mysqli_query($conn, $query_usuario);
        $response = [
            "error" => false,
            "mensagem" => "Usuário editado com sucesso "
        ];
        
    }else{
        $response = [
            "error" => true,
            "mensagem" => "Não foi possivel editar o usuário, tente novamente mais tarde"
        ];
    }

    http_response_code(200);
    echo json_encode($response);
