/**
 * Recebe string '1.118,35' e retorna number 1118.35
 */

export default function moedaParaNumero(moeda: string): number | null {
    const numero = Number(moeda.replaceAll(".", "").replaceAll(",", "."))
    return isNaN(numero) ? null : numero
}