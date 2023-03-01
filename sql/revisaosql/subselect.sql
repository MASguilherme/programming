/* SUB SELECT */
SELECT MAX(c.id_cliente_cliente) + 1 AS newIdCliente FROM cliente c;

/* INSERT DE ID COM SUBSELECT */
INSERT INTO cliente VALUE(
	(SELECT MAX(c.id_cliente_cliente) + 1 AS id_cliente_cliente FROM cliente c),
    'Chatolino',
    '15948723615',
    '1989-03-20',
    1
);

SELECT * FROM cliente;

