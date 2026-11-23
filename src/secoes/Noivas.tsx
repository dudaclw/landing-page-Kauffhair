import { zap, fora } from '../dados'
import { Cabecalho, FotoGrande, Icone, botao } from '../ui'

// confirmar as etapas com a cliente
const passos = [
  ['01', 'Primeiro contato', 'Você conta a data, o local e o estilo do casamento.'],
  ['02', 'Prova', 'Testamos penteado e maquiagem com calma, antes do grande dia.'],
  ['03', 'O grande dia', 'Cabelo e maquiagem impecáveis para você viver cada momento.'],
]

export function Noivas() {
  return (
    <section id="noivas" className="painel secao bg-escuro text-claro">
      <div className="wrap grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-[0.9fr_1.1fr]">
        <FotoGrande src="/img/noiva-1.jpg" alt="Noiva com penteado semipreso, trança e grampos de pérola" legenda="Noiva Kauffhair" largura={1080} altura={1440} />
        <div>
          <Cabecalho escuro etiqueta="Noivas" titulo={<>Participar de um <em>sonho</em>.</>}
            apoio="Ser responsável pela beleza de uma noiva é muito mais do que produzir uma maquiagem e um penteado. É acolher expectativas e transformar cada detalhe em uma lembrança que ficará para sempre na memória." />
          <ol className="my-9 grid gap-3">
            {passos.map(([numero, titulo, texto]) => (
              <li key={numero} data-revela className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 rounded-card border border-white/10 bg-white/4 px-6 py-5 transition-colors duration-300 hover:border-rosa hover:bg-white/7">
                <b className="row-span-2 font-serif text-[1.75rem] font-normal italic leading-none text-rosa">{numero}</b>
                <h3>{titulo}</h3>
                <p className="text-[0.95rem] leading-normal text-claro-2">{texto}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-3">
            <a className={botao('claro')} href={zap('noivas')} {...fora}><Icone nome="anel" />Reservar minha data</a>
            <a className={botao('linhaEscura')} href="#penteados">Ver penteados</a>
          </div>
        </div>
      </div>
    </section>
  )
}
