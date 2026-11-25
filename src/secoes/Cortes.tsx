import { cortes } from '../dados'
import { Agendar, Cabecalho, Foto } from '../ui'

export function Cortes() {
  return (
    <section id="cortes" className="painel secao bg-fundo-2">
      <div className="wrap">
        <Cabecalho centro etiqueta="Cortes" titulo={<>Camadas com <em>movimento</em> e leveza.</>}
          apoio="Cortes que valorizam o seu formato e a sua cor." />
        <div className="grid grid-cols-3 gap-2 md:gap-5">
          {cortes.map((c) => (
            <Foto key={c.foto} src={c.foto} alt={c.alt} posicao={c.posicao} className="aspect-3/4 rounded-card" />
          ))}
        </div>
        <Agendar titulo="Quer renovar o visual?" texto="Fale com a Vivi e agende o seu corte pelo WhatsApp." chave="corte" rotulo="Quero meu corte" />
      </div>
    </section>
  )
}
