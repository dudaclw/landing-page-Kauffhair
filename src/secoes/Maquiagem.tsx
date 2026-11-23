import { Agendar, Cabecalho, Diferencial, FotoGrande } from '../ui'

export function Maquiagem() {
  return (
    <section id="maquiagem" className="painel secao bg-fundo-2">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
          <div>
            <Cabecalho etiqueta="Maquiagem" titulo={<>A make que <em>completa</em> o seu penteado.</>}
              apoio="Feita pela equipe Dyo, Kari e Sthe, em harmonia com o cabelo, para noivas, formandas, madrinhas e convidadas." />
            <div className="mt-2 grid gap-3">
              <Diferencial icone="batom" titulo="Cabelo e make juntos" texto="Você se arruma de uma vez só, com tudo combinando." />
              <Diferencial icone="brilho" titulo="Para cada ocasião" texto="Do natural ao glamour, de acordo com o evento." />
              <Diferencial icone="anel" titulo="Noivas e madrinhas" texto="Pensada para o grande dia e para as fotos." />
            </div>
          </div>
          <FotoGrande src="/img/maquiagem-1.jpg" alt="Cliente com maquiagem de olhos esfumados e penteado semipreso" legenda="Make e semipreso" largura={720} altura={1280} posicao="center 30%" />
        </div>
        <Agendar titulo="Vai a um evento?" texto="Agende sua maquiagem com a equipe." chave="maquiagem" rotulo="Agendar maquiagem" />
      </div>
    </section>
  )
}
