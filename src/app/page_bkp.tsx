import { PrimeiroComponente, ArrowFunction } from '../components/PrimeiroComponente'

export default function Home() {
  return (
    <>
      Hello World!
      <PrimeiroComponente 
          mensagem='Primeiro Componente!'
          mensagemDoBotao='Clique aqui no Botão' 
      />

      <PrimeiroComponente 
          mensagemDoBotao='Clicou no outro Botão' 
      />          
      <ArrowFunction />
    </>

  )
}
