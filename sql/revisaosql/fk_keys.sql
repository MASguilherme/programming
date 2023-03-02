/* FOREIGN KEY entre cliente e tipoCliente */
ALTER TABLE cliente
ADD CONSTRAINT fk_tipoCliente FOREIGN KEY (int_tipo_cliente)
REFERENCES tipoCliente (int_id_tipoCliente);

/* FOREIGN KEY entre clienteCopia e tipoCliente */
ALTER TABLE clienteCopia
ADD CONSTRAINT fk_tipoClienteCopia FOREIGN KEY (int_tipo_cliente)
REFERENCES tipoCliente (int_id_tipoCliente);

/* adicionando a chave estrangeira */
ALTER TABLE venda 
ADD CONSTRAINT fk_i_cliente_cliente FOREIGN KEY (i_cliente_cliente)
REFERENCES cliente(int_id_cliente);
