export default function questao(req, res) {
    if(req.method === "GET"){
        get(req, res)
    } else {
        res.status(405).send()
    }

}

export function get(req, res) {
    if(req.method === "GET"){
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: "Qual é a sua cor preferida?",
            respostas: [
                'Branca', 'Vermelha', 'Amarela', 'Verde'
            ]
        })
    }
}