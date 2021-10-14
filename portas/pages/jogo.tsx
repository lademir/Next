import { useState } from "react";
import Porta from "../components/porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import styles from "../styles/Jogo.module.css"
import Link from "next/link"

export default  function jogo() {
    const [portas, setPortas] = useState(criarPortas(4,3))

  function renderizarPortas() {
      return portas.map(porta => {
        return <Porta key={porta.numero} value={porta}
         onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
      })
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
            <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  )
}