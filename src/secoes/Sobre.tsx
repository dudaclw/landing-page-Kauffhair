import { Cabecalho, Chip } from '../ui'

export function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="wrap grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
        {/* trocar pelo retrato da Vivi: <img src="/img/vivi.jpg" alt="Vivi, à frente da Kauffhair" className="aspect-4/5 rounded-painel object-cover" /> */}
        <div data-revela aria-hidden="true" className="grid aspect-4/5 place-items-center rounded-painel bg-gradiente font-serif text-[clamp(7rem,16vw,11rem)] leading-none text-white/92 max-md:mx-auto max-md:w-full max-md:max-w-[460px]">
          K
        </div>
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
