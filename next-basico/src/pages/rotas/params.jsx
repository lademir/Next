import { useRouter } from "next/router"
import Link from "next/link"

export default function params(){

    const router = useRouter()


    const id = router.query.id
    const nome = router.query.nome
    const teste = router.query.teste

    console.log(router);

    return (
        <>
        <div>
            <h1>Rotas params</h1>
            <h2>ID: {id}</h2>
            <h2>Nome: {nome}</h2>
            <h2>Teste: {teste}</h2>
        </div>
        <div>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
        </>
    )
}