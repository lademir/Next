// Para usar api, funciona parecido com dart/flutter

//gerando apenas do lado do servidor
export async function getServerSideProps(){
    console.log('[Server] gerando props para o componente....');
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()

    return {
        props: {
            produtos
        }
    }
}
//funcao que gera a pagina estatica
export default function Dinamico2(props){

    console.log('[Cliente] gerando props para o componente....');
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return <li key={produto.id} >id: {produto.id} {produto.nome} tem preço de R${produto.preco}</li>
        })
    }

    return (
        <div>
            <h1>Dinamico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}