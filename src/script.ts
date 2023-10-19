import Estatisticas from "./Estatisticas.js"
import fetchDados from "./fetchDados.js"
import normalizarTransacao from "./normalizarTransacao.js"
async function handleDados(){
    const data = await fetchDados<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?")
    if(!data) return
    const transacoes = data.map(normalizarTransacao)
    preencherTabela(transacoes)
    preencherEstatisticas(transacoes)
}

function preencherEstatisticas(transacoes: Transacao[]): void {
    const data = new Estatisticas(transacoes)

    const totalElement = document.querySelector<HTMLElement>("#total span")
    if(totalElement) {
        totalElement.innerText = data.total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    }
}


function preencherTabela(transacoes: Transacao[]): void {
    const tabela = document.querySelector("#transacoes tbody")
    if(!tabela) return
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
            <tr>
                <td>${transacao.nome}</td>
                <td>${transacao.email}</td>
                <td>R$ ${transacao.moeda}</td>
                <td>${transacao.pagamento}</td>
                <td>${transacao.status}</td>
            </tr>
        `
    })
}

handleDados()