class ContaBancaria {
  constructor(numeroDaConta, saldo, nomeDoTitular) {
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
    this.nomeDoTitular = nomeDoTitular;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor inválido para depósito");
      return;
    }
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado com sucesso`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
      return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado com sucesso`);
  }
}

let conta1 = new ContaBancaria(123, 1000, "João");

conta1.depositar(50);
conta1.depositar(-100);

conta1.sacar(100);
conta1.sacar(1100);