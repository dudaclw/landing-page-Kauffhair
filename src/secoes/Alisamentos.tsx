import { Agendar, Cabecalho, Diferencial, Foto, Profissional } from '../ui'

export function Alisamentos() {
  return (
    <section id="alisamentos" className="secao">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
          <Foto src="/img/alisamento-1.jpg" alt="Antes e depois do alisamento: cabelo armado e ondulado à esquerda, liso, longo e brilhante à direita" legenda="Antes e depois" posicao="center" className="aspect-square rounded-painel max-md:mx-auto max-md:w-full max-md:max-w-[460px]" />
          <div>
            <Cabecalho etiqueta="Alisamentos" titulo={<>Fios lisos, <em>alinhados</em> e com brilho.</>}
              apoio="Alisamentos feitos pela Mariza, para um liso bonito e fácil de cuidar no dia a dia.">
              <Profissional foto="/img/mariza.jpg" nome="Mariza" papel="Técnica em alisamentos" posicao="center 25%" />
            </Cabecalho>
            <div className="mt-2 grid gap-3">
              <Diferencial icone="brilho" titulo="Brilho e maciez" texto="Fios alinhados, com toque macio e muito brilho." />
              <Diferencial icone="onda" titulo="Menos volume e frizz" texto="Cabelo mais leve e fácil de arrumar." />
            </div>
          </div>
        </div>
        <div className="mt-[clamp(40px,6vw,64px)] grid grid-cols-2 gap-3 md:gap-5">
          <Foto src="/img/alisamento-2.jpg" alt="Cabelo longo, escuro e ondulado, visto de costas" posicao="center 40%" className="aspect-3/4 rounded-card md:aspect-[4/3]" />
          <Foto src="/img/alisamento-3.jpg" alt="Cabelo longo, liso e brilhante depois do alisamento, visto de costas" posicao="center 40%" className="aspect-3/4 rounded-card md:aspect-[4/3]" />
        </div>
        <Agendar titulo="Quer um liso assim?" texto="Agende o seu alisamento com a Mariza pelo WhatsApp." chave="alisamento" rotulo="Quero alisar" />
      </div>
    </section>
  )
}
