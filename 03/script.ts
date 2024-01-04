function realizarTabuada(arrayDaTabuada: number[]) { 
    if (!arrayDaTabuada.length) {
        console.log('Não é possível realizar a tabuada.');
        return;
    }

    for (const numero of arrayDaTabuada) {
        for (let i: number = 0; i <= 10; i++) {
            let resultado = numero * i
            console.log(`${numero} x ${i} = ${resultado}`);
        }
        console.log('')
    }
}

realizarTabuada([]);