import { useEffect, useState } from "react"

export default function Estatico1(){

    const [num, setNum] = useState(0)

    useEffect(() =>{
        setNum(Math.random())
    },[])

    return (
        <div>
            <h1>Estatico</h1>
            <h2>{num}</h2>
        </div>
    )
}