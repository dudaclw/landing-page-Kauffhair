import { useState } from 'react'
import { Agendar, Cabecalho, Diferencial, Etiqueta, Icone } from '../ui'

// Arraste para comparar: a foto "antes" é recortada até a posição da barra
function Comparador() {
  const [pos, setPos] = useState(50)
  return (
    <figure data-revela className="relative isolate aspect-4/5 overflow-clip rounded-painel shadow-suave select-none has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-4 has-[input:focus-visible]:outline-marca max-md:mx-auto max-md:w-full max-md:max-w-[460px]">
      <img src="/img/mechas-depois.jpg" alt="Depois: loiro iluminado e uniforme" width={440} height={550} className="absolute inset-0 size-full object-cover object-top" />
      <img src="/img/mechas-antes.jpg" alt="Antes: mechas antigas com raiz escura" width={440} height={550} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        className="absolute inset-0 size-full object-cover object-top" />
      <span className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-px bg-white" style={{ left: `${pos}%` }} />
      <span className="pointer-events-none absolute top-1/2 flex size-13 -translate-1/2 items-center justify-center rounded-full bg-white text-marca shadow-suave" style={{ left: `${pos}%` }}>
        <Icone nome="esq" className="-mx-[3px] size-[18px]" /><Icone nome="dir" className="-mx-[3px] size-[18px]" />
      </span>
      <Etiqueta className="absolute bottom-[18px] left-[18px]">Antes</Etiqueta>
      <Etiqueta className="absolute right-[18px] bottom-[18px]">Depois</Etiqueta>
      <input type="range" value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Comparar antes e depois"
        className="absolute inset-0 size-full cursor-ew-resize touch-pan-y opacity-0" />
    </figure>
  )
}

export function Mechas() {
  return (
    <section id="mechas" className="secao">
      <div className="wrap">
        <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
          <div>
            <Comparador />
            <p className="mt-4 flex items-center justify-center gap-2 text-[0.85rem] text-tinta-2 md:justify-start">
              <Icone nome="esq" className="size-4" />Arraste para comparar o antes e o depois<Icone nome="dir" className="size-4" />
            </p>
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
        {/* Galeria de loiros: entra aqui quando houver fotos de loiro de costas */}
        <Agendar titulo="Quer um loiro assim?" texto="Fale com a Vivi e tire suas dúvidas pelo WhatsApp." chave="mechas" rotulo="Quero meu loiro" />
      </div>
    </section>
  )
}
