import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [presente, setPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
      <Cartao bgcolor="#c0392c">
        <h1 className={styles.titulo}>Portas</h1>
      </Cartao>
      <Cartao>
        <EntradaNumerica text="Qtde Portas?"
         value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
      </Cartao>
      </div>
      <div>
      <Cartao>
      <EntradaNumerica text="Porta com Presente"
         value={presente} onChange={novaPresente => setPresente(novaPresente)}/>
      </Cartao>
      <Cartao bgcolor="#28a085">
        <Link href={`/jogo/${qtdePortas}/${presente}`}>
          <h2 className={styles.link}>Iniciar</h2>
        </Link>
      </Cartao>
      </div>
    </div>
  )
}
