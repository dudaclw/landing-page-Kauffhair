import { zap, fora } from '../dados'
import { Cabecalho, Foto, Icone, botao } from '../ui'

// confirmar as etapas com a cliente
const passos = [
  ['01', 'Primeiro contato', 'Você conta a data, o local e o estilo do casamento.'],
  ['02', 'Prova', 'Testamos penteado e maquiagem com calma, antes do grande dia.'],
  ['03', 'O grande dia', 'Cabelo e maquiagem impecáveis para você viver cada momento.'],
]

export function Noivas() {
  return (
    <section id="noivas" className="painel secao bg-escuro text-claro">
      <div className="wrap">
      <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-[0.9fr_1.1fr]">
        <Foto src="/img/noiva-7.jpg" alt="Noiva sorrindo com coque alto, tiara de cristais e véu, segurando o perfume" legenda="Noiva Kauffhair" />
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

      {/* o grande dia. Computador: xadrez de 3 linhas, foto larga + foto que acompanha a altura dela.
          Celular: grupo no topo, depois um par, a noiva com a daminha (order-1) e o último par (order-2). */}
      <div className="mt-[clamp(40px,6vw,64px)] grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-5">
        <Foto src="/img/noiva-3.jpg" alt="Noiva com a daminha e as madrinhas no dia do casamento" legenda="Noiva e madrinhas" className="col-span-2 aspect-3/2 rounded-card md:col-span-3" />
        <Foto src="/img/noiva-2.jpg" alt="Noiva de cabelo cacheado preso, com buquê de rosas, ao lado da daminha" legenda="Noiva e daminha" posicao="center 20%" className="col-span-2 aspect-4/5 rounded-card max-md:order-1 md:aspect-auto" />
        <Foto src="/img/noiva-4.jpg" alt="Noiva de robe branco enquanto os cachos são presos no alto" posicao="center 30%" className="aspect-3/4 rounded-card md:col-span-2 md:aspect-auto" />
        <Foto src="/img/noiva-5.jpg" alt="Vivi colocando a tiara no penteado cacheado da noiva" posicao="center 46%" className="aspect-3/4 rounded-card md:col-span-3 md:aspect-4/3" />
        <Foto src="/img/noiva-6.jpg" alt="Vivi modelando os cachos da noiva com babyliss" posicao="center 32%" className="aspect-3/4 rounded-card max-md:order-2 md:col-span-3 md:aspect-4/3" />
        <Foto src="/img/noiva-1.jpg" alt="Noiva com penteado semipreso, trança e grampos de pérola" posicao="center 30%" className="aspect-3/4 rounded-card max-md:order-2 md:col-span-2 md:aspect-auto" />
      </div>
      </div>
    </section>
  )
}
