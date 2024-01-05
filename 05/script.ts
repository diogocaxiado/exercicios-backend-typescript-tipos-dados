const soletrando = (palavra: string): string => {
    let palavraSoletrada: string = "";
    for (let i = 0; i < palavra.length; i++) {
        if (i + 1 === palavra.length) {
            return palavraSoletrada += `${palavra[i]}`
        } 
    
        palavraSoletrada += `${palavra[i]}-`
    }
    return palavraSoletrada;
}

console.log(soletrando('programador'));