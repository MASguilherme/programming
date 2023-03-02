/* criando uma VIEW*/
CREATE VIEW nomes_clientes AS
SELECT int_id_cliente, s_nome_cliente  FROM cliente;

/* cláusula FROM com VIEW */
SELECT * FROM nomes_clientes;

/* cláusula FROM */
SELECT 
	tableCliente.s_nome_cliente, 
    tableCliente.int_id_cliente
FROM 
	(SELECT s_nome_cliente, int_id_cliente FROM cliente) tableCliente;