import { useRef } from 'react'
import { penteados } from '../dados'
import { Agendar, Cabecalho, Chip, Icone } from '../ui'

const seta = 'grid size-12 cursor-pointer place-items-center rounded-full border border-linha bg-white text-tinta transition duration-300 ease-suave hover:scale-106 hover:border-rosa'

export function Penteados() {
  const trilho = useRef<HTMLDivElement>(null)
  const mover = (direcao: number) => {
    const t = trilho.current
    if (t) t.scrollBy({ left: direcao * t.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="penteados" className="secao">
      <div className="wrap">
        <div className="mb-[clamp(40px,6vw,56px)] flex flex-wrap items-end justify-between gap-6">
          <Cabecalho className="mb-0" etiqueta="Penteados" titulo={<>Entre curvas, texturas e delicadeza, nasce um penteado <em>cheio de personalidade</em>.</>}>
            <div className="flex flex-wrap gap-2">
              {['Formandas', 'Madrinhas', 'Debutantes', 'Convidadas'].map((p) => <Chip key={p}>{p}</Chip>)}
            </div>
          </Cabecalho>
          {/* setas só no computador; no celular o carrossel desliza com o dedo */}
          <div className="hidden gap-2.5 md:flex">
            <button type="button" className={seta} onClick={() => mover(-1)} aria-label="Penteado anterior"><Icone nome="esq" /></button>
            <button type="button" className={seta} onClick={() => mover(1)} aria-label="Próximo penteado"><Icone nome="dir" /></button>
          </div>
        </div>

        {/* celular: vai de ponta a ponta da tela e mostra a borda do próximo card */}
        <div ref={trilho} data-revela className="-mx-[clamp(20px,4vw,40px)] grid snap-x snap-mandatory scroll-px-[clamp(20px,4vw,40px)] auto-cols-[78%] grid-flow-col gap-4 overflow-x-auto px-[clamp(20px,4vw,40px)] pb-1 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:auto-cols-[clamp(250px,30%,360px)] md:gap-5 md:px-0 [&::-webkit-scrollbar]:hidden">
          {penteados.map((p) => (
            <figure key={p.foto} className="group relative isolate aspect-3/4 snap-start overflow-clip rounded-card">
              <img src={p.foto} alt={p.alt} className="size-full object-cover transition-transform duration-1000 ease-suave group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-b from-transparent to-escuro/80 px-[22px] pt-16 pb-[22px] text-white">
                <h3>{p.titulo}</h3>
                <p className="text-sm opacity-85">{p.texto}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <Agendar titulo="Tem evento chegando?" texto="Garanta seu horário para o penteado." chave="penteado" rotulo="Agendar penteado" />
      </div>
    </section>
  )
}
