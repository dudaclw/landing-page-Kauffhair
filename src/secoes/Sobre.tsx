import { Cabecalho, Chip, Foto } from '../ui'

export function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="wrap grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
        <Foto src="/img/vivi.jpg" alt="Vivi, à frente da Kauffhair, sorrindo de vestido preto" />
        <div>
          <Cabecalho etiqueta="Quem faz" titulo={<>Prazer, eu sou a <em>Vivi</em>.</>}
            apoio="Especialista em mechas personalizadas e penteados para eventos. Para mim, a verdadeira transformação está nos detalhes: na cor que combina com você e no penteado que acompanha a festa inteira." />
          {/* incluir anos de profissão e formação quando a cliente enviar */}
          <div data-revela className="flex flex-wrap gap-2">
            <Chip icone="gota">Especialista em mechas</Chip>
            <Chip icone="onda">Penteados de evento</Chip>
            <Chip icone="anel">Noivas</Chip>
            <Chip icone="batom">Maquiagem com Dyo, Kari e Sthe</Chip>
          </div>
          <p className="mt-7 font-serif text-2xl italic text-marca">Cabelo by Vivi</p>
        </div>
      </div>
    </section>
  )
}
