/* criando uma VIEW*/
CREATE VIEW nomes_clientes AS
SELECT id_cliente_cliente, s_nome_cliente  FROM cliente;

/* cláusula FROM com VIEW */
SELECT * FROM nomes_clientes;

/* cláusula FROM */
SELECT 
	table_cliente.s_nome_cliente, 
    table_cliente.id_cliente_cliente
FROM 
	(SELECT s_nome_cliente, id_cliente_cliente FROM cliente) table_cliente;