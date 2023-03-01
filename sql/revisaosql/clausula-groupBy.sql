/*GROUP BY */
/* GROUP BY de quantidade de tipo de clientes*/
SELECT tableTipoCliente.s_descricao_tipo_cliente,
		COUNT(tableCliente.i_tipo_cliente) AS 'Total de clientes'
        
	FROM cliente tableCliente INNER JOIN tipocliente tableTipoCliente
		ON tableCliente.i_tipo_cliente = tableTipoCliente.id_tipo_cliente_tipocliente
        
	GROUP BY tableCliente.i_tipo_cliente, 
			 tableTipoCliente.s_descricao_tipo_cliente;
             
/*GROUP BY Vendas no ano 2001*/
SELECT YEAR(d_data_venda) AS 'Ano', COUNT(d_data_venda) AS 'Total de Vendas'
 FROM venda
	GROUP BY d_data_venda;