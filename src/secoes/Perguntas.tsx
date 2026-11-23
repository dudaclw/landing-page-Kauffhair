import { perguntas, zap, fora } from '../dados'
import { Cabecalho, Icone, botao } from '../ui'

// Depoimentos: entram antes desta seção quando houver depoimentos reais, com nome e autorização da cliente.
export function Perguntas() {
  return (
    <section id="perguntas" className="painel secao bg-fundo-2">
      <div className="wrap grid items-start gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
        <Cabecalho className="mb-0" etiqueta="Perguntas frequentes" titulo={<>Antes de <em>agendar</em>.</>}
          apoio="Não achou a sua dúvida? Manda uma mensagem que a Vivi responde.">
          <a className={botao('linha')} href={zap('duvida')} {...fora}><Icone nome="chat" />Tirar dúvida</a>
        </Cabecalho>
        <div className="grid gap-3">
          {perguntas.map(([pergunta, resposta]) => (
            <details key={pergunta} data-revela className="group rounded-card border border-linha bg-white px-6 transition-colors duration-300 open:border-rosa hover:border-rosa">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[22px] font-serif text-[1.2rem] leading-[1.35] [&::-webkit-details-marker]:hidden">
                {pergunta}
                <span className="grid size-[34px] shrink-0 place-items-center rounded-full bg-rosa-claro text-marca transition-[rotate] duration-300 ease-suave group-open:rotate-45">
                  <Icone nome="mais" className="size-4" />
                </span>
              </summary>
              <p className="pb-6 text-tinta-2">{resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
