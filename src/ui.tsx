// Peças visuais reutilizadas em várias seções.
import type { ReactNode } from 'react'
import { zap, fora, type Chave } from './dados'

const caminhos = {
  chat: <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z" />,
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  esq: <path d="M15 18l-6-6 6-6" />,
  dir: <path d="M9 18l6-6-6-6" />,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></>,
  coracao: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z" />,
  brilho: <path d="M12 4l1.8 6.2L20 12l-6.2 1.8L12 20l-1.8-6.2L4 12l6.2-1.8z" />,
  gota: <path d="M12 3.5s6 6.4 6 10.8a6 6 0 0 1-12 0c0-4.4 6-10.8 6-10.8z" />,
  sol: <><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" /></>,
  onda: <path d="M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0" />,
  anel: <><circle cx="12" cy="15" r="6" /><path d="M9.5 4.5h5L16 7l-4 2.5L8 7z" /></>,
  tesoura: <><circle cx="6" cy="6" r="2.8" /><circle cx="6" cy="18" r="2.8" /><path d="M8.2 7.8L20 19M8.2 16.2L20 5" /></>,
  batom: <><rect x="8" y="12" width="8" height="9" rx="1.5" /><path d="M9.5 12V8l5-3.5V12" /></>,
  olhar: <><path d="M2.5 14s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5z" /><circle cx="12" cy="14" r="2.5" /><path d="M5 6.5c4-2.5 10-2.5 14 0" /></>,
  insta: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  mais: <path d="M12 5v14M5 12h14" />,
}
export type NomeIcone = keyof typeof caminhos

export function Icone({ nome, className = 'size-[22px]' }: { nome: NomeIcone; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`shrink-0 fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round] ${className}`}>
      {caminhos[nome]}
    </svg>
  )
}

// Botões: pílula arredondada em 4 estilos
const estilos = {
  primario: 'border-transparent bg-marca text-white hover:bg-marca-escura',
  claro: 'border-transparent bg-claro text-escuro hover:bg-white',
  linha: 'border-linha bg-transparent text-tinta hover:border-rosa hover:bg-white',
  linhaEscura: 'border-white/25 bg-transparent text-claro hover:bg-white/8',
}
export function botao(estilo: keyof typeof estilos = 'primario', pequeno = false) {
  return `inline-flex items-center gap-2.5 rounded-full border font-medium leading-none cursor-pointer transition duration-300 ease-suave hover:-translate-y-0.5 hover:shadow-suave [&_svg]:size-[18px] ${estilos[estilo]} ${pequeno ? 'px-5 py-[11px] text-sm' : 'px-7 py-[15px] text-[0.95rem]'}`
}

export function Logo({ assinatura }: { assinatura?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-xl bg-gradiente font-serif text-2xl leading-none text-white">K</span>
      <span className="grid text-left leading-tight">
        <b className="font-serif text-base font-medium tracking-[0.2em]">KAUFFHAIR</b>
        {assinatura && <small className="text-xs text-tinta-2">Espaço da Beleza · Cabelo by Vivi</small>}
      </span>
    </a>
  )
}

export function Eyebrow({ children, escuro }: { children: ReactNode; escuro?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-3 text-xs font-medium uppercase leading-none tracking-[0.22em] before:h-px before:w-7 before:bg-current before:content-[''] ${escuro ? 'text-rosa' : 'text-marca'}`}>
      {children}
    </p>
  )
}

// Cabeçalho de seção: etiqueta, título e texto de apoio
export function Cabecalho({ etiqueta, titulo, apoio, centro, escuro, className = '', children }: {
  etiqueta: string; titulo: ReactNode; apoio?: string; centro?: boolean; escuro?: boolean; className?: string; children?: ReactNode
}) {
  return (
    <div data-revela className={`grid max-w-[640px] gap-4 ${centro ? 'mx-auto justify-items-center text-center' : 'justify-items-start'} ${className || 'mb-[clamp(40px,6vw,64px)]'}`}>
      <Eyebrow escuro={escuro}>{etiqueta}</Eyebrow>
      <h2 className={escuro ? '[&_em]:text-rosa' : ''}>{titulo}</h2>
      {apoio && <p className={`text-lg ${escuro ? 'text-claro-2' : 'text-tinta-2'}`}>{apoio}</p>}
      {children}
    </div>
  )
}

export function Etiqueta({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`inline-block whitespace-nowrap rounded-full bg-escuro/72 px-3.5 py-2 text-[0.8rem] font-medium leading-none text-white ${className}`}>{children}</span>
}

export function Chip({ children, icone }: { children: ReactNode; icone?: NomeIcone }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-rosa-claro px-4 py-[9px] text-sm font-medium leading-none text-marca-escura">
      {icone && <Icone nome={icone} className="size-4" />}
      {children}
    </span>
  )
}

// Diferencial com ícone (usado em Mechas e Maquiagem)
export function Diferencial({ icone, titulo, texto }: { icone: NomeIcone; titulo: string; texto: string }) {
  return (
    <div data-revela className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-0.5 rounded-card border border-linha bg-white px-5 py-[18px] transition duration-300 ease-suave hover:border-rosa hover:[transform:translateX(4px)]">
      <span className="row-span-2 grid size-12 place-items-center rounded-[14px] bg-rosa-claro text-marca"><Icone nome={icone} /></span>
      <h3 className="font-sans text-base font-medium leading-tight">{titulo}</h3>
      <p className="text-[0.925rem] leading-normal text-tinta-2">{texto}</p>
    </div>
  )
}

// Foto grande arredondada com legenda (Noivas e Maquiagem)
export function FotoGrande({ src, alt, legenda, largura, altura, posicao }: {
  src: string; alt: string; legenda: string; largura: number; altura: number; posicao?: string
}) {
  return (
    <figure data-revela className="group relative isolate aspect-4/5 overflow-clip rounded-painel max-md:mx-auto max-md:w-full max-md:max-w-[460px]">
      <img src={src} alt={alt} width={largura} height={altura} loading="lazy" style={{ objectPosition: posicao }}
        className="size-full object-cover transition-transform duration-1000 ease-suave group-hover:scale-105" />
      <figcaption className="absolute bottom-4 left-4"><Etiqueta>{legenda}</Etiqueta></figcaption>
    </figure>
  )
}

// Barra de "Agendar" no fim de cada serviço
export function Agendar({ titulo, texto, chave, rotulo }: { titulo: string; texto: string; chave: Chave; rotulo: string }) {
  return (
    <div data-revela className="mt-[clamp(32px,5vw,48px)] flex flex-wrap items-center justify-between gap-x-6 gap-y-4 rounded-full border border-linha bg-white py-[18px] pr-[18px] pl-8 shadow-suave max-md:flex-col max-md:items-start max-md:rounded-card max-md:p-6">
      <p className="font-serif text-xl leading-snug">
        {titulo}
        <span className="block font-sans text-[0.925rem] leading-normal text-tinta-2">{texto}</span>
      </p>
      <a className={botao()} href={zap(chave)} {...fora}><Icone nome="chat" />{rotulo}</a>
    </div>
  )
}
