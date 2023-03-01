/* INNER JOIN */

/* INNER JOIN da TABLE cliente e tipocliente*/
SELECT 
	table_cliente.id_cliente_cliente,
    table_cliente.s_nome_cliente,
    table_cliente.s_cpf_cliente,
    table_cliente.d_nasc_cliente,
    table_tipocliente.s_descricao_tipo_cliente
FROM cliente table_cliente INNER JOIN tipocliente table_tipocliente
	ON table_cliente.i_tipo_cliente = table_tipocliente.id_tipo_cliente_tipocliente;
    
/*INNER JOIN da TABLE venda e cliente */
CREATE VIEW cliente_completo AS
SELECT 
	table_venda.i_venda_venda,
    table_cliente.s_nome_cliente,
    table_venda.d_data_venda,
    table_venda.f_valor_venda,
    table_tipocliente.s_descricao_tipo_cliente
FROM venda table_venda INNER JOIN cliente table_cliente
	ON table_venda.i_cliente_cliente = table_cliente.id_cliente_cliente
		INNER JOIN tipocliente table_tipocliente
			ON table_cliente.i_tipo_cliente = table_tipocliente.id_tipo_cliente_tipocliente;
            
SELECT * FROM cliente_completo;
    
