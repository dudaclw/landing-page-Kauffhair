import { loiros } from '../dados'
import { Agendar, Cabecalho, Diferencial, Foto } from '../ui'

export function Mechas() {
  return (
    <section id="mechas" className="secao">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
          {/* loiros feitos pela Vivi: o trabalho vem primeiro */}
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {loiros.map((l) => (
              <Foto key={l.foto} src={l.foto} alt={l.alt} className="aspect-3/4 rounded-card" />
            ))}
          </div>
          <div>
            <Cabecalho etiqueta="Mechas personalizadas" titulo={<>Cada detalhe importa quando o objetivo é um <em>loiro exclusivo</em>.</>}
              apoio="Loiros uniformes, iluminados e com a delicadeza dos tons bege perolados, pensados para valorizar a sua beleza." />
            <div className="mt-2 grid gap-3">
              <Diferencial icone="gota" titulo="Cor pensada para você" texto="O tom é escolhido para valorizar a sua pele e o seu estilo." />
              <Diferencial icone="sol" titulo="Iluminado e uniforme" texto="Do bege perolado ao platinado, com luz do começo ao fim." />
              <Diferencial icone="brilho" titulo="Resultado exclusivo" texto="Cada loiro é único, como quem o usa." />
            </div>
          </div>
        </div>
        <Agendar titulo="Quer um loiro assim?" texto="Fale com a Vivi e tire suas dúvidas pelo WhatsApp." chave="mechas" rotulo="Quero meu loiro" />
      </div>
    </section>
  )
}
