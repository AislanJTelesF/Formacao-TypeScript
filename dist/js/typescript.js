// Tipos Primitivos
let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22;
// Arrays
const lista = [];
lista.push("Jhonatan", "Cachorro", 22, true, []);
const lista2 = [];
lista2.push(12, 45, 22, 0, 30);
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
//
