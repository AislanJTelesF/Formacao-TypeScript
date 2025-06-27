// Tipos Primitivos

let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays

const lista = [];
lista.push("Jhonatan", "Cachorro", 22, true, []);

const lista2: number[] = [];
lista2.push(12, 45, 22, 0, 30);

// Tipos Personalizados (Type Alias)

type Transacao = {
  tipoTransacao: TipoTransacao;
  data: Date;
  valor: number;
};

// Enum
enum TipoTransacao {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

const novaTransacao: Transacao = {
  tipoTransacao: TipoTransacao.DEPOSITO,
  data: new Date(),
  valor: 0,
};

//
