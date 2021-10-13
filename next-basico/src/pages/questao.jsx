import { useEffect, useState } from "react"

export default function questao(){

    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/13')
        .then(resp => resp.json())
        .then(setQuestao)
    }, [])

    function rederizarRespostas() {
        if(questao){
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        }
    }

    return (
        <div>
            <h1>Questao 1</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
                <ul>
                    {rederizarRespostas()}
                </ul>
            </div>
        </div>
    )
}