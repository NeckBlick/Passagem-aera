<?php
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");
    // header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

    include_once "conexao.php";
    
        
        $query_usuario = "SELECT voo.id_vo,voo.numero_vagas,companhias_aereas.nome_companhia, destino.nome_destino, voo.numero_vagas, voo.dia_do_voo, preco.preco_fixo 
        FROM voo 
        INNER JOIN companhias_aereas ON companhias_id = companhias_aereas.companhia_id 
        INNER JOIN destino ON destino_id = destino.destinos_id 
        INNER JOIN preco ON preco_voo = preco.id_preco";
        $cad_usuario = mysqli_query($conn, $query_usuario);
        
        if(mysqli_num_rows($cad_usuario) > 0){
            while($voo = mysqli_fetch_array($cad_usuario)){
                $response[] = [
                    "id" => $voo['id_vo'],
                    "companhia" => $voo['nome_companhia'],
                    "destino" => $voo['nome_destino'],
                    "diavoo" => $voo['dia_do_voo'],
                    "vagas" => $voo['numero_vagas'],
                    "preco" => $voo['preco_fixo'],
                    "error" => false
                ]; 
            }
        }else{
            $response = [
                "error" => true,
                "mensagem" => "Nenhum voo encontrado"
            ];
        }
http_response_code(200);
echo json_encode($response);
