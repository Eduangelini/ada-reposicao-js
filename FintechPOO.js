const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
}

class Conta {
  #saldo;

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso.`);
    } else {
      console.log("Valor para depósito deve ser positivo.");
    }
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso.`);
      return valor;
    } else {
      console.log("Saldo insuficiente.");
      return 0;
    }
  }

  getSaldo() {
    return this.#saldo;
  }

  exibirSaldo() {
    console.log(`Saldo atual: R$${this.#saldo}`);
  }
}

class ContaCorrente extends Conta {
  constructor(titular, saldoInicial, limiteChequeEspecial = 0) {
    super(titular, saldoInicial);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  sacar(valor) {
    if (valor <= this.getSaldo() + this.limiteChequeEspecial) {
      if (valor > this.getSaldo()) {
        const valorNoLimite = valor - this.getSaldo();
        console.log(`Utilizando R$${valorNoLimite} do limite de cheque especial.`);
      }
      super.sacar(valor);
    } else {
      console.log("Saldo e limite de cheque especial insuficientes.");
    }
  }
}

class ContaPoupanca extends Conta {
  constructor(titular, saldoInicial, taxaJurosAnual = 0) {
    super(titular, saldoInicial);
    this.taxaJurosAnual = taxaJurosAnual;
  }

  aplicarRendimento() {
    const rendimento = this.getSaldo() * (this.taxaJurosAnual / 100);
    this.depositar(rendimento);
    console.log(`Rendimento de R$${rendimento.toFixed(2)} aplicado.`);
  }
}

async function criarConta() {
  const nome = await question("Digite o nome do titular da conta: ");
  const tipo = (await question("Tipo de conta (corrente/poupanca): ")).toLowerCase();
  let conta;

  switch (tipo) {
    case 'corrente':
      const limite = parseFloat(await question("Digite o limite de cheque especial: "));
      conta = new ContaCorrente(nome, 0, limite);
      break;
    case 'poupanca':
      const taxaJuros = parseFloat(await question("Digite a taxa de juros anual (%): "));
      conta = new ContaPoupanca(nome, 0, taxaJuros);
      break;
    default:
      console.log("Tipo de conta inválido.");
      return null;
  }

  console.log(`Conta ${tipo} criada para ${nome}.`);
  return conta;
}

async function executarOperacoes(conta) {
  let operacao;

  do {
    operacao = await question("Escolha uma operação: depositar, sacar, saldo, rendimento (poupanca) ou sair: ");

    switch (operacao) {
      case 'depositar':
        const valorDeposito = parseFloat(await question("Valor para depósito: "));
        conta.depositar(valorDeposito);
        break;
      case 'sacar':
        const valorSaque = parseFloat(await question("Valor para saque: "));
        conta.sacar(valorSaque);
        break;
      case 'saldo':
        conta.exibirSaldo();
        break;
      case 'rendimento':
        if (conta instanceof ContaPoupanca) {
          conta.aplicarRendimento();
        } else {
          console.log("Operação disponível apenas para Conta Poupança.");
        }
        break;
      case 'sair':
        console.log("Operações finalizadas.");
        break;
      default:
        console.log("Operação inválida.");
    }
  } while (operacao !== 'sair');

  rl.close();
}

async function main() {
  const conta = await criarConta();
  if (conta) {
    await executarOperacoes(conta);
  }
}

main();