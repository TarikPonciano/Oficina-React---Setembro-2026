import { useState } from 'react'
import type { Pessoa } from './types'
import './App.css'
import { FormCadastro} from "./components/FormCadastro"
import { ListaPessoas } from './components/ListaPessoas'

// Determinar os atributos que compõem uma pessoa. 
// Criar o type pessoa (id:string, nome:string, email:string)
// Definir o estado pessoas e determinar a tipagem dele

function App() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([])

  function adicionarPessoa (nova: Pessoa){

    setPessoas([...pessoas, nova]) 
    
  }

  return (
    <main>
      <h1>Cadastro de Pessoas</h1>
      
      <FormCadastro onAdicionarPessoa = {adicionarPessoa}/>

      {pessoas.length == 0 ? <p>Não há pessoas cadastradas...</p>: <ListaPessoas pessoas={pessoas}/>}
      
    </main>
  )
}

export default App
