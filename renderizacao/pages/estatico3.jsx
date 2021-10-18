//SERVER SIDE RENDERING
//RENDERIZAÇÃO A PARTIR DO BUILD E NAO QUANDO O CLIENTE ENTRA NA PAGINA
//REVALIDATE: a cada X segundos, a tela vai ser refeita
export function getStaticProps(){
    return {
        revalidate: 7,//segundos
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props){
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}