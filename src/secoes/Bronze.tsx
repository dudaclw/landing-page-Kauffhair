import { Agendar, Cabecalho, Diferencial, Foto, Profissional } from '../ui'

export function Bronze() {
  return (
    <section id="bronze" className="painel secao bg-fundo-2">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
          <div>
            <Cabecalho etiqueta="Bronze Orgânico" titulo={<>O bronze <em>das blogueiras</em>, com glow de verão.</>}
              apoio="Um bronzeado iluminado, com efeito dourado e natural, que valoriza a beleza da sua pele.">
              <Profissional foto="/img/indianara.jpg" nome="Indianara" papel="Bronze Orgânico" posicao="center 30%" />
            </Cabecalho>
            <div className="mt-2 grid gap-3">
              <Diferencial icone="sol" titulo="Dourado e natural" texto="Cor de verão sem precisar ficar no sol." />
              <Diferencial icone="brilho" titulo="Bonito e uniforme" texto="Bronze por igual, com aquele brilho especial." />
            </div>
          </div>
          <Foto src="/img/bronze-1.jpg" alt="Antes e depois do bronzeamento orgânico: uma perna com a pele clara e a outra já dourada, com o aplicador ao lado" legenda="Antes e depois" posicao="center 40%" />
        </div>
        <Agendar titulo="Você também merece esse efeito de verão" texto="Agende o seu bronze com a Indianara pelo WhatsApp." chave="bronze" rotulo="Quero meu bronze" />
      </div>
    </section>
  )
}
