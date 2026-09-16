import type { Pessoa } from "../types";
import { ItemPessoa } from "./ItemPessoa";

type Props = {
    pessoas: Pessoa[]
}

export function ListaPessoas ({pessoas} : Props){
    // Adaptar o componente li para um componente chamado <ItemPessoa/>
    // 1. Identificar os props que esse componente precisa para ser renderizado
    // 2. Realizar a tipagem dos props recebidos
    // 3. Identificar se é necessário criar estados para esse componente
    // 4. Criar o html que esse componente produz
    return (
        <ul>
            {pessoas.map((p) => (
                <ItemPessoa key={p.id} pessoa={p}/>
            ))}

        </ul>
    )

}