/* SELECT: FROM - WHERE - GROUP BY - HAVING - ORDER BY */

SELECT  
id_cliente_cliente as idCliente,
i_tipo_cliente * 2 as valorCliente,
UPPER(s_nome_cliente) as nomeCliente
FROM cliente;