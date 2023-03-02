/* SUB SELECT */
SELECT MAX(c.id_cliente_cliente) + 1 AS newIdCliente FROM cliente c;

/* INSERT DE ID COM SUBSELECT */
INSERT INTO cliente VALUE(
	(SELECT MAX(c.int_id_cliente) + 1 AS id_Cliente FROM cliente c),
    'Chapolin',
    '15948723615',
    '1989-03-20',
    1
);

SELECT * FROM cliente;

