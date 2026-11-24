import { servicos, outrosServicos, zap, fora } from '../dados'
import { Cabecalho, Icone, botao } from '../ui'

// recorte da foto (ou do ícone) no topo de cada card
const quadro = 'aspect-square min-h-0 overflow-clip md:aspect-4/5 lg:aspect-4/3'

export function Servicos() {
  return (
    <section id="servicos" className="painel secao bg-fundo-2">
      <div className="wrap">
        <Cabecalho centro etiqueta="Serviços" titulo={<>Escolha o seu <em>momento</em>.</>}
          apoio="Veja os trabalhos de cada serviço e fale direto com a Vivi pelo WhatsApp." />

        {/* celular e tablet: 2 colunas; computador: 3. Serviço ainda sem foto (Cortes) entra na mesma grade, com ícone no lugar da foto */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {[...servicos, ...outrosServicos].map((s) => (
            <article key={s.titulo} data-revela
              className="group isolate flex flex-col overflow-clip rounded-card border border-linha bg-white transition duration-300 ease-suave hover:border-rosa hover:shadow-suave hover:[transform:translateY(-6px)]">
              {'foto' in s ? (
                <a href={s.ancora} tabIndex={-1} className={`relative ${quadro}`}>
                  <img src={s.foto} alt="" loading="lazy" style={{ objectPosition: s.posicao }}
                    className="block size-full object-cover transition-transform duration-1000 ease-suave group-hover:scale-105 md:absolute md:inset-0" />
                </a>
              ) : (
                <span className={`grid place-items-center bg-rosa-claro text-marca ${quadro}`}><Icone nome={s.icone} className="size-12" /></span>
              )}
              <div className="flex flex-1 flex-col gap-2 p-3.5 md:p-5">
                <h3 className="text-[1.05rem] leading-tight md:text-[1.3rem]">{s.titulo}</h3>
                <p className="hidden flex-1 text-[0.925rem] leading-normal text-tinta-2 md:block">{s.texto}</p>
                <div className="mt-auto flex flex-col gap-2 pt-1 md:pt-3">
                  <a className={`${botao('primario', true)} justify-center max-md:px-2.5 max-md:text-[0.8rem] min-[360px]:whitespace-nowrap`} href={zap(s.chave)} {...fora}>Tenho interesse</a>
                  {'ancora' in s && (
                    <a href={s.ancora} className="group/ver inline-flex items-center justify-center gap-1.5 py-1 text-[0.85rem] font-medium text-marca">
                      Ver trabalhos<Icone nome="seta" className="size-4 transition-[translate] duration-300 group-hover/ver:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
