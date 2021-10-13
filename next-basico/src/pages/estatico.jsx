// Conteudo que gera apenas uma vez e fica sendo usado apenas esse

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function estatico(props){
    return (
        <div>
            <span>Aleatorio: {props.numero}</span>
        </div>
    )
}