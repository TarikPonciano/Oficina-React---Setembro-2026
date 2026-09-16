import React, { useEffect, useState } from "react";
import type { Pessoa } from "../types"
import "./FormCadastro.css"

type Props = {
    onAdicionarPessoa: (nova: Pessoa) => void
}

export function FormCadastro({ onAdicionarPessoa }: Props) {
    //Declarar os estados que representam as informações da pessoa
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const [buscandoCep, setBuscandoCep] = useState(false)


    //Função que deve rodar quando ocorrer submissão
    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault()

        if (!nome || !email) {
            return
        }

        onAdicionarPessoa({
            id: crypto.randomUUID(),
            nome, email, cep, logradouro, cidade, estado
        })

        setNome(''); setEmail(''); setCep('')
        setLogradouro(''); setCidade(''); setEstado('')
    }


    async function handleBuscarCep(){

        if (cep.length !== 8){
            return
        }

        setBuscandoCep(true)

        try {

            const dados = await buscarCep(cep)

            setLogradouro(dados.logradouro)
            setCidade(dados.localidade)
            setEstado(dados.estado)
            
        } catch {
            alert("ERRO AO BUSCAR CEP!")
        } finally{
            setBuscandoCep(false)
        }

    }

    //HTML do componente

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Nome" value={nome}
                onChange={(e) => setNome(e.target.value)} />
            <input placeholder="E-mail" value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <input placeholder="CEP (só números)" value={cep}
                onChange={(e) => setCep(e.target.value)} onBlur={handleBuscarCep}/>
            {buscandoCep ? <small>buscando endereço...</small>: <></> }


            <input placeholder="Logradouro" value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)} />
            <input placeholder="Cidade" value={cidade}
                onChange={(e) => setCidade(e.target.value)} />
            <input placeholder="Estado (UF)" value={estado}
                onChange={(e) => setEstado(e.target.value)} />

            <button type="submit">Cadastrar</button>
        </form>
    )

}