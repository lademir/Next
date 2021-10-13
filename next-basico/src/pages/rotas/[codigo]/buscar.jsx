import { useRouter } from "next/router"
import Link from "next/link"

export default function buscar(){
    const router = useRouter()
    const codigo = router.query.codigo
    

    console.log(router);
    return (
        <div>
            <h1>Rotas / {codigo} / buscar!!!!</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}