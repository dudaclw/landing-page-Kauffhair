import { zap, fora, INSTAGRAM } from '../dados'
import { Icone, Logo } from '../ui'

const redondo = 'grid size-11 place-items-center rounded-full border border-linha bg-white text-marca transition duration-300 hover:border-rosa hover:bg-rosa-claro'

// Rodapé minimalista. No celular fica empilhado e centralizado; no computador, em uma linha.
// Endereço e horários entram aqui quando a cliente enviar.
export function Rodape() {
  return (
    <footer id="contato" className="wrap flex flex-col items-center gap-5 py-12 text-center md:flex-row md:justify-between">
      <Logo assinatura />
      <div className="flex gap-3 md:order-3">
        <a className={redondo} href={zap()} {...fora} aria-label="WhatsApp"><Icone nome="chat" className="size-5" /></a>
        <a className={redondo} href={INSTAGRAM} {...fora} aria-label="Instagram @kauffhair"><Icone nome="insta" className="size-5" /></a>
      </div>
      <p className="text-xs text-tinta-2 md:order-2">
        © 2026 Kauffhair · feito com ❤️ por{' '}
        <a href="https://www.instagram.com/duarda12th/" {...fora} className="underline-offset-2 hover:underline">@duarda12th</a>
      </p>
    </footer>
  )
}
