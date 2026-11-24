import { olhares } from '../dados'
import { Agendar, Cabecalho, Diferencial, Foto, Profissional } from '../ui'

export function Sobrancelhas() {
  return (
    <section id="sobrancelhas" className="secao">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
          <Foto src="/img/sobrancelha-1.jpg" alt="Antes e depois da extensão de cílios: à esquerda os cílios naturais, à direita volumosos e alongados" legenda="Extensão de cílios, antes e depois" />
          <div>
            <Cabecalho etiqueta="Sobrancelhas e cílios" titulo={<>O olhar <em>emoldurado</em> nos detalhes.</>}
              apoio="Sobrancelhas, cílios, depilação com linha e bronzeamento orgânico são feitos pela Indianara.">
              <Profissional foto="/img/indianara.jpg" nome="Indianara" papel="Sobrancelhas, cílios e bronze" posicao="center 30%" />
            </Cabecalho>
            <div className="mt-2 grid gap-3">
              <Diferencial icone="olhar" titulo="Sobrancelhas" texto="Design tradicional, henna ou coloração e brow lamination." />
              <Diferencial icone="cilios" titulo="Cílios" texto="Extensão de cílios, com manutenção a cada 21 dias, e lash lifting." />
              <Diferencial icone="onda" titulo="Depilação" texto="De buço e de rosto com linha." />
            </div>
          </div>
        </div>
        <div className="mt-[clamp(40px,6vw,64px)] grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {olhares.map((o) => (
            <Foto key={o.foto} src={o.foto} alt={o.alt} posicao={o.posicao} className="aspect-3/4 rounded-card" />
          ))}
        </div>
        <Agendar titulo="Quer realçar o olhar?" texto="Agende com a Indianara pelo WhatsApp." chave="sobrancelha" rotulo="Quero agendar" />
      </div>
    </section>
  )
}
