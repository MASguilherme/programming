class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar (valor){
        if(valor > this._saldo){
            return "Operação Negada";
        }
        else{
            this._saldo = this._saldo - valor;

            return this._saldo;
        }
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "poupança";
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        if(this._saldo == 500){
            this._saldo = this._saldo + 50;
        }
        if(this._saldo > 500){
            this._saldo = this._saldo + 100;
        }
        if(this._saldo < 500){
            this._saldo = this._saldo + 20;
        }
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "universitária";
    }

    sacar(valor){
        if(valor > 500){
            return "operação negada";
        }
        else{
            this._saldo = this._saldo - valor;
        }
    }
}