import { makes } from '../dados'
import { Agendar, Cabecalho, Diferencial, Foto } from '../ui'

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
          <Foto src="/img/maquiagem-1.jpg" alt="Cliente com maquiagem de olhos esfumados e penteado semipreso" legenda="Make e semipreso" posicao="center 30%" />
        </div>
        {/* makes da Dyo; a última foto é a própria Dyo */}
        <div className="mt-[clamp(40px,6vw,64px)] grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {makes.map((m) => (
            <Foto key={m.foto} src={m.foto} alt={m.alt} legenda={m.legenda} posicao={m.posicao} className="aspect-3/4 rounded-card" />
          ))}
        </div>
        <Agendar titulo="Vai a um evento?" texto="Combine a make com o seu penteado." chave="maquiagem" rotulo="Quero fazer a make" />
      </div>
    </section>
  )
}
