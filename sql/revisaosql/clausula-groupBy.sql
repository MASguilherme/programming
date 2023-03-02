/*GROUP BY */
/* GROUP BY de quantidade de tipo de clientes*/
SELECT tableTipoCliente.s_descricao_tipoCliente,
		COUNT(tableCliente.int_id_cliente) AS 'Total de clientes'
        
	FROM cliente tableCliente INNER JOIN tipocliente tableTipoCliente
		ON tableCliente.int_id_cliente = tableTipoCliente.int_id_tipoCliente
        
	GROUP BY tableCliente.int_id_cliente, 
			 tableTipoCliente.s_descricao_tipoCliente;
             
/*GROUP BY Vendas no ano 2001*/
SELECT YEAR(d_data_venda) AS 'Ano', COUNT(d_data_venda) AS 'Total de Vendas'
 FROM venda
	GROUP BY d_data_venda;