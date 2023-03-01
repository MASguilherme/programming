/* Cláusla WHERE */

SELECT * FROM cliente 
	WHERE i_tipo_cliente = 1 OR i_tipo_cliente = 2 OR i_tipo_cliente = 4;
    
SELECT * FROM cliente 
	WHERE id_cliente_cliente >= 1 AND id_cliente_cliente <= 8;
    
SELECT * FROM cliente
	WHERE MONTH(d_nasc_cliente) = 2 AND i_tipo_cliente = 1;
    
SELECT * FROM cliente
	WHERE id_cliente_cliente IN(2,10,5);
    
SELECT * FROM cliente
	WHERE s_nome_cliente = 'José' OR s_nome_cliente = 'Guilherme';