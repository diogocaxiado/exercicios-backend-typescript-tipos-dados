const usuariosDaPlataforma: {nome: string, idade: number, status: boolean}[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

function filtrarUsuarios(lista: {nome: string, idade: number, status: boolean}[], nome: string) {
    const formatarNome = nome[0].toUpperCase() + nome.slice(1).toLowerCase()
    const filtrados = lista.filter((usuario) => usuario.nome.includes(formatarNome))
    
    return filtrados
}

console.log(filtrarUsuarios(usuariosDaPlataforma, 'José'));
