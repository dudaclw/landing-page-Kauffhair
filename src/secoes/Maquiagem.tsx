import { maquiadoras } from '../dados'
import { Agendar, Cabecalho, Diferencial, Foto, Profissional } from '../ui'

export function Maquiagem() {
  return (
    <section id="maquiagem" className="painel secao bg-fundo-2">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(32px,5vw,80px)] md:grid-cols-2">
          <Cabecalho etiqueta="Maquiagem" titulo={<>A make que <em>completa</em> o seu penteado.</>} className="mb-0"
            apoio="Com a Dyo e a Karina, em harmonia com o cabelo, para noivas, formandas, madrinhas e convidadas. Veja abaixo o trabalho de cada uma." />
          <div className="grid gap-3">
            <Diferencial icone="batom" titulo="Cabelo e make juntos" texto="Você se arruma de uma vez só, com tudo combinando." />
            <Diferencial icone="brilho" titulo="Para cada ocasião" texto="Do natural ao glamour, de acordo com o evento." />
            <Diferencial icone="anel" titulo="Noivas e madrinhas" texto="Pensada para o grande dia e para as fotos." />
          </div>
        </div>
        {/* cada maquiadora com o próprio cartão e as próprias makes */}
        <div className="mt-[clamp(40px,6vw,64px)] grid gap-[clamp(40px,5vw,48px)] md:grid-cols-2">
          {maquiadoras.map((p) => (
            <div key={p.nome}>
              <Profissional foto={p.foto} nome={p.nome} papel="Maquiadora" posicao={p.posicao} />
              <div className="mt-4 grid grid-cols-3 gap-2 md:gap-3">
                {p.makes.map((m) => (
                  <Foto key={m.foto} src={m.foto} alt={m.alt} posicao={m.posicao} className="aspect-3/4 rounded-card" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Agendar titulo="Vai a um evento?" texto="Agende a sua make com a Dyo ou a Karina pelo WhatsApp." chave="maquiagem" rotulo="Quero fazer a make" />
      </div>
    </section>
  )
}
