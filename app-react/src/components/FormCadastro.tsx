import React, { useState } from "react";
import type {Pessoa} from "../types"
import "./FormCadastro.css"

type Props = {
    onAdicionarPessoa: (nova: Pessoa) => void
}

export function FormCadastro({onAdicionarPessoa} : Props){
    //Declarar os estados que representam as informações da pessoa
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("") 


    //Função que deve rodar quando ocorrer submissão
    function handleSubmit(e: React.SubmitEvent){
        e.preventDefault()

        if (!nome || !email){
            return
        }

        onAdicionarPessoa(
            {
                id: crypto.randomUUID(),
                nome: nome,
                email: email
            }
        )

        setNome("")
        setEmail("")
    }
    //HTML do componente

    return (
        <form onSubmit={handleSubmit}>
            <input
            name="nome"
        
            placeholder="Nome"
            value={nome}
            onChange={(e) => {setNome(e.target.value)}}
            />

            <input
            placeholder="Email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />

            <button type="submit">Cadastrar</button>

        </form>
    )
    
}