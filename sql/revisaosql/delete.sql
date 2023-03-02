DELETE FROM cliente WHERE int_id_cliente > 0;

INSERT INTO cliente SELECT * FROM clientecopia;

INSERT INTO tipocliente VALUES(4, 'cliente maroto');

INSERT INTO cliente  VALUES(4,'Guilherme','15985236541', '1598-02-25', 4);

SELECT * FROM cliente;