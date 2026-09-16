import type { Pessoa } from "../types";

type Props = {
    pessoas: Pessoa[]
}

export function ListaPessoas ({pessoas} : Props){

    return (
        <ul>
            {pessoas.map((p) => (
                <li key={p.id}>{p.nome} - {p.email}</li>
            ))}

        </ul>
    )

}