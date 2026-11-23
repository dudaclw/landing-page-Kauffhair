import { menu, zap, fora } from '../dados'
import { botao, Logo } from '../ui'

export function Topo() {
  return (
    <header className="topo sticky top-0 z-20 border-b border-transparent bg-fundo/82 backdrop-blur-[14px]">
      <div className="wrap flex h-[76px] items-center gap-4 md:gap-8">
        <Logo compacto />
        <nav aria-label="Seções" className="ml-auto flex gap-7 text-[0.9rem] max-[880px]:hidden">
          {menu.map(([href, nome]) => (
            <a key={href} href={href} className="text-tinta-2 transition-colors hover:text-tinta">{nome}</a>
          ))}
        </nav>
        <a className={`${botao('primario', true)} whitespace-nowrap max-[880px]:ml-auto max-md:px-4 max-md:text-[0.8rem]`} href={zap()} {...fora}>Reservar horário</a>
      </div>
    </header>
  )
}
