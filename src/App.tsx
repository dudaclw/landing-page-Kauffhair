import { useEffect } from 'react'
import { Topo } from './secoes/Topo'
import { Abertura, Faixa } from './secoes/Abertura'
import { Servicos } from './secoes/Servicos'
import { Mechas } from './secoes/Mechas'
import { Noivas } from './secoes/Noivas'
import { Penteados } from './secoes/Penteados'
import { Maquiagem } from './secoes/Maquiagem'
import { Sobrancelhas } from './secoes/Sobrancelhas'
import { Bronze } from './secoes/Bronze'
import { Sobre } from './secoes/Sobre'
import { Perguntas } from './secoes/Perguntas'
import { Rodape } from './secoes/Rodape'

// Entrada suave: cada bloco com data-revela aparece uma vez quando entra na tela; irmãos entram em sequência
function useRevela() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver((itens) => itens.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target) }
    }), { rootMargin: '0px 0px -10% 0px' })
    document.querySelectorAll<HTMLElement>('[data-revela]').forEach((el) => {
      const i = [...(el.parentElement?.children ?? [])].indexOf(el)
      el.style.setProperty('--d', `${(i % 3) * 0.1}s`)
      el.classList.add('revela')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useRevela()
  return (
    <>
      <Topo />
      <main>
        <Abertura />
        <Faixa />
        <Servicos />
        <Mechas />
        <Noivas />
        <Penteados />
        <Maquiagem />
        <Sobrancelhas />
        <Bronze />
        <Sobre />
        <Perguntas />
      </main>
      <Rodape />
    </>
  )
}
