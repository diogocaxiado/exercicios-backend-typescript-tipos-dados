const impressaoDeEtiquetas = (produto: {produto: string, lote: number, ano: number, qtd: number}): string[] => {
    let impressoes = [];
    for (let i = 0; i < produto.qtd; i++) {
        impressoes.push(`${produto.lote}-${produto.ano}-00${i + 1}`)
    }
    return impressoes
}

const produto: {produto: string, lote: number, ano: number, qtd: number} = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

console.log(impressaoDeEtiquetas(produto));