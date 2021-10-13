import Link from 'next/link'
import router from 'next/router'


export default function rotas(){

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "rotas/params",
            query: {
                id: 123,
                nome: "Gustavo",
                teste: "teste"
            }
        })
    }

    return (
        <div>
            <h1>Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Joana&teste=funcionando">
                    <li>params</li>
                </Link>
                <Link href="/rotas/123/buscar?codigo=1234">
                    <li>buscar</li>
                </Link>
                <Link href="/rotas/123/Daniel">
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection:"column", alignItems:"flex-start"}}>
                <button onClick={() => router.push("/rotas/123/buscar?codigo=1234")} >Buscar</button>
                <button style={{marginTop:10}} onClick={navegacaoComParams} >Params</button>
                <button style={{marginTop:10}} onClick={() => navegacaoSimples("/rotas/123/Daniel")} >Daniel</button>
            </div>
        </div>
    )
}