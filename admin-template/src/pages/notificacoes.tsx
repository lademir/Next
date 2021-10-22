import Layout from "../components/template/Layout"
import useAppData from "../data/hook/useAppData"

export default function Notificacoes() {

  const { alternarTema} = useAppData()

  return (
    <Layout titulo="Notificações"
     subtitulo="Aqui voce ira gerencias as suas notificacoes">
       
       <button onClick={alternarTema}>onClick</button>
    </Layout>
  )
}
