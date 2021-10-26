import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props:FormularioProps) {
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div className="bg-gray-200 border rounded-md p-7">
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id}
                    className="mb-4"
                />
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome}
                className="mb-4"
            />
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>
            <div className={`flex mt-4 justify-end`}>
                <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}