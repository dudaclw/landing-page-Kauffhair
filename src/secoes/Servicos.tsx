import { servicos, outrosServicos, zap, fora } from '../dados'
import { Cabecalho, Icone, botao } from '../ui'

export function Servicos() {
  return (
    <section id="servicos" className="painel secao bg-fundo-2">
      <div className="wrap">
        <Cabecalho centro etiqueta="Serviços" titulo={<>Escolha o seu <em>momento</em>.</>}
          apoio="Veja os trabalhos de cada serviço e fale direto com a Vivi pelo WhatsApp." />

        {/* celular: 2 colunas com foto quadrada; tablet: 2 colunas; computador: 4 colunas com foto em retrato */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {servicos.map((s) => (
            <article key={s.titulo} data-revela
              className="group isolate flex flex-col overflow-clip rounded-card border border-linha bg-white transition duration-300 ease-suave hover:border-rosa hover:shadow-suave hover:[transform:translateY(-6px)]">
              <a href={s.ancora} tabIndex={-1} className="relative aspect-square overflow-clip md:aspect-4/5">
                <img src={s.foto} alt="" loading="lazy" style={{ objectPosition: s.posicao }}
                  className="absolute inset-0 size-full object-cover transition-transform duration-1000 ease-suave group-hover:scale-105" />
              </a>
              <div className="flex flex-1 flex-col gap-2 p-3.5 md:p-5">
                <h3 className="text-[1.05rem] leading-tight md:text-[1.3rem]">{s.titulo}</h3>
                <p className="hidden flex-1 text-[0.925rem] leading-normal text-tinta-2 md:block">{s.texto}</p>
                <div className="mt-auto flex flex-col gap-2 pt-1 md:pt-3">
                  <a className={`${botao('primario', true)} justify-center max-md:px-2.5 max-md:text-[0.8rem] min-[360px]:whitespace-nowrap`} href={zap(s.chave)} {...fora}>Tenho interesse</a>
                  <a href={s.ancora} className="group/ver inline-flex items-center justify-center gap-1.5 py-1 text-[0.85rem] font-medium text-marca">
                    Ver trabalhos<Icone nome="seta" className="size-4 transition-[translate] duration-300 group-hover/ver:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* serviços ainda sem foto */}
        {/* celular: 2 cards lado a lado como os de cima; computador: linhas com ícone, texto e botão */}
        <div className="mt-3 grid grid-cols-2 gap-3 md:mt-5 md:gap-5">
          {outrosServicos.map((s) => (
            <div key={s.titulo} data-revela className="flex flex-col items-center gap-3 rounded-card border border-linha bg-white p-3.5 text-center md:flex-row md:gap-4 md:p-5 md:text-left">
              <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-rosa-claro text-marca"><Icone nome={s.icone} /></span>
              <div className="md:flex-1">
                <h3 className="text-[1.05rem] leading-tight md:text-[1.2rem]">{s.titulo}</h3>
                <p className="hidden text-[0.85rem] leading-snug text-tinta-2 md:block">{s.texto}</p>
              </div>
              <a className={`${botao('primario', true)} w-full justify-center max-md:mt-auto max-md:px-2.5 max-md:text-[0.8rem] min-[360px]:whitespace-nowrap md:w-auto md:shrink-0`} href={zap(s.chave)} {...fora}>Tenho interesse</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
