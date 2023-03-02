/* Cláusla WHERE */

SELECT * FROM cliente 
	WHERE int_tipo_cliente = 1 OR int_tipo_cliente = 2 OR int_tipo_cliente = 4;
    
SELECT * FROM cliente 
	WHERE int_id_cliente >= 1 AND int_id_cliente <= 8;
    
SELECT * FROM cliente
	WHERE MONTH(dt_nasc_cliente) = 2 AND int_tipo_cliente = 1;
    
SELECT * FROM cliente
	WHERE int_id_cliente IN(2,10,5);
    
SELECT * FROM cliente
	WHERE s_nome_cliente = 'Chapolin' OR s_nome_cliente = 'Guilherme';