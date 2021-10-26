interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props:BotaoProps) {
    const cor = props.cor ?? "gray"
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md transition duration-200 ease-in-out
            transform hover:scale-110 hover:-translate-y-1
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}