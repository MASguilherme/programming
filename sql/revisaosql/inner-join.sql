/* INNER JOIN */

/* INNER JOIN da TABLE cliente e tipocliente*/
SELECT 
	tableCliente.int_id_cliente,
    tableCliente.s_nome_cliente,
    tableCliente.s_cpf_cliente,
    tableCliente.dt_nasc_cliente,
    tableTipocliente.s_descricao_tipoCliente
FROM cliente AS tableCliente INNER JOIN tipocliente AS tableTipocliente
	ON tableCliente.int_tipo_cliente = tableTipocliente.int_id_tipocliente;
    
/*INNER JOIN da TABLE venda e cliente */
CREATE VIEW clienteCompleto AS
SELECT 
	tableVenda.i_venda_venda,
    tableCliente.s_nome_cliente,
    tableVenda.d_data_venda,
    tableVenda.f_valor_venda,
    tableTipoCliente.s_descricao_tipoCliente
FROM venda tableVenda INNER JOIN cliente tableCliente
	ON tableVenda.i_cliente_cliente = tableCliente.int_id_cliente
		INNER JOIN tipocliente tableTipoCliente
			ON tableCliente.int_tipo_cliente = tableTipoCliente.int_id_tipoCliente;
            
SELECT * FROM clienteCompleto;
    
