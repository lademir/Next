import { useState } from "react";
import Porta from "../components/porta";
import PortaModel from "../model/porta";


export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1, false,false,false))
  const [texto, setTexto] = useState("")

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  )
}
