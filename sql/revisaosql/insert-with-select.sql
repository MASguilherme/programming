INSERT INTO clientecopia(
	int_id_cliente, s_nome_cliente, s_cpf_cliente, dt_nasc_cliente, int_tipo_cliente
) SELECT int_id_cliente, s_nome_cliente, s_cpf_cliente, dt_nasc_cliente, int_tipo_cliente
FROM cliente;

SELECT * FROM clientecopia;