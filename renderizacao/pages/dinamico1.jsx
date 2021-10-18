export function getServerSideProps(){
    console.log('[Server]');
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props){
    console.log('[Cliente]');
    return (
        <div>
            <h1>Dinamico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}