INSERT INTO cliente_dois(
	id_cliente_cliente, s_nome_cliente, s_cpf_cliente, d_nasc_cliente, i_tipo_cliente
) SELECT id_cliente_cliente, s_nome_cliente, s_cpf_cliente, d_nasc_cliente, i_tipo_cliente
FROM cliente;

SELECT * FROM cliente_dois;