import type { Pessoa } from "../types"
import "./ItemPessoa.css"

type Props = {
    pessoa: Pessoa
}

export function ItemPessoa({ pessoa }: Props) {
    return (<li  className="pessoa-item">
        <strong>{pessoa.nome}</strong>
        <span className="pessoa-item-email">{pessoa.email}</span>
    </li>)
}