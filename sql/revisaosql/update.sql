UPDATE cliente SET s_nome_cliente='Guilherme' WHERE id_cliente_cliente = 1;

UPDATE cliente SET s_cpf_cliente = '01234567891' WHERE id_cliente_cliente > 0;

DELETE from cliente WHERE id_cliente_cliente > 0;

INSERT INTO cliente SELECT * FROM cliente_dois;

SELECT * FROM cliente; 