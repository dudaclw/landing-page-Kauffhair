import { zap, fora, faixa } from '../dados'
import { Icone, botao, Eyebrow, type NomeIcone } from '../ui'

// indicadores: sempre 3 colunas iguais, nunca quebram em 2 + 1
const provas: [NomeIcone, string, string][] = [
  ['check', 'Verificado', 'no Instagram'],
  ['coracao', '11 mil', 'seguidores'],
  ['anel', 'Noivas', 'e eventos'],
]

function Flutuante({ icone, titulo, texto, className }: { icone: NomeIcone; titulo: string; texto: string; className: string }) {
  return (
    <div className={`absolute flex animate-flutuar items-center gap-3 rounded-[18px] bg-white py-3 pr-5 pl-3 text-left text-tinta shadow-[0_24px_48px_-20px_rgb(0_0_0/0.55)] max-md:gap-2.5 max-md:rounded-[14px] max-md:py-2 max-md:pr-3.5 max-md:pl-2 ${className}`}>
      <span className="grid size-10 place-items-center rounded-xl bg-gradiente text-white max-md:size-8 max-md:rounded-[10px] max-md:[&_svg]:size-[18px]">
        <Icone nome={icone} />
      </span>
      <span>
        <b className="block text-[0.95rem] font-medium leading-[1.3] max-md:text-[0.85rem]">{titulo}</b>
        <small className="text-[0.8rem] text-tinta-2 max-md:text-[0.72rem]">{texto}</small>
      </span>
    </div>
  )
}

export function Abertura() {
  return (
    <section className="painel brilho-abertura overflow-hidden py-[clamp(56px,8vw,104px)] text-claro">
      <div className="wrap grid items-center gap-16 max-lg:justify-items-center max-lg:text-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-[clamp(40px,6vw,80px)]">
        <div className="flex flex-col items-start max-lg:items-center">
          <Eyebrow escuro>Espaço da Beleza</Eyebrow>
          <h1 className="my-5 max-w-[600px] text-[clamp(2.4rem,4.4vw,3.7rem)] leading-[1.1] [&_em]:text-rosa max-[520px]:text-[2.2rem]">
            Cores que valorizam sua beleza. <em>Penteados que eternizam momentos.</em>
          </h1>
          <p className="mb-9 max-w-[460px] text-lg text-claro-2">Especialista em mechas personalizadas, penteados de evento e noivas.</p>
          <div className="flex flex-wrap gap-3 max-lg:justify-center max-[520px]:flex-col max-[520px]:self-stretch max-[520px]:[&>a]:justify-center">
            <a className={botao('claro')} href={zap()} {...fora}><Icone nome="chat" />Falar com a Vivi</a>
            <a className={botao('linhaEscura')} href="#servicos">Ver serviços</a>
          </div>
          <ul className="mt-12 grid w-full max-w-[480px] grid-cols-3 border-t border-white/10 pt-7">
            {provas.map(([icone, destaque, texto]) => (
              <li key={destaque} className="grid content-start justify-items-start gap-2 px-5 text-[0.8rem] leading-[1.35] text-claro-2 first:pl-0 not-first:border-l not-first:border-white/10 max-lg:justify-items-center max-lg:px-2 max-lg:first:pl-2">
                <Icone nome={icone} className="size-5 text-rosa" />
                <span><b className="block text-[0.95rem] font-medium text-claro">{destaque}</b>{texto}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative w-[min(100%,400px)] justify-self-center before:pointer-events-none before:absolute before:-inset-3.5 before:rounded-[999px_999px_40px_40px] before:border before:border-rosa/45 before:content-[''] max-md:w-[min(100%,340px)]">
          <img src="/img/hero.jpg" alt="Cliente Kauffhair sorrindo, com penteado de ondas e maquiagem" width={1080} height={1337} fetchPriority="high"
            className="aspect-3/4 w-full rounded-[999px_999px_28px_28px] object-cover" />
          {/* cards na parte de baixo da foto, longe do rosto */}
          <Flutuante icone="brilho" titulo="Loiro exclusivo" texto="do bege perolado ao platinado" className="-left-8 bottom-9 max-md:-left-2.5 max-md:bottom-5" />
          <Flutuante icone="onda" titulo="Penteados" texto="que duram a festa toda" className="-right-7 bottom-31 [animation-delay:-3s] max-md:-right-2.5 max-md:bottom-22" />
        </figure>
      </div>
    </section>
  )
}

export function Faixa() {
  return (
    <div aria-hidden="true" className="group overflow-hidden py-8 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-rolar group-hover:[animation-play-state:paused]">
        {[...faixa, ...faixa].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 whitespace-nowrap pr-8 font-serif text-[clamp(1.4rem,2.6vw,2rem)] italic leading-none text-tinta-2 after:size-[7px] after:rounded-full after:bg-rosa after:content-['']">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
