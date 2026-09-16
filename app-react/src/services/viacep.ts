type ViaCepSucesso = {
    logradouro: string
    localidade: string
    uf: string
    erro?: false
}

type ViaCepErro = {
    erro: true
}

export async function buscarCep(cep: string): Promise<ViaCepSucesso>{

    const limpo = cep.replace(/\D/g, '')

    const resp = await fetch(`https://viacep.com.br/ws/${limpo}/json/`)

    const dados: ViaCepSucesso | ViaCepErro = await resp.json()

    if (dados.erro) throw new Error('CEP NÃO ENCONTRADO')

    return dados
}