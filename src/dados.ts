// Conteúdo da página num lugar só: WhatsApp, serviços, penteados e perguntas.
// Fotos ficam em public/img (do Instagram público e enviadas pela cliente).

// WhatsApp da Kauffhair (+55 45 99948-9990)
export const WHATSAPP = '5545999489990'

const INTERESSE = {
  mechas: 'pelas mechas personalizadas',
  noivas: 'pelo atendimento de noivas (cabelo e maquiagem)',
  penteado: 'por penteado',
  maquiagem: 'por maquiagem',
  corte: 'por corte',
  sobrancelha: 'pelos serviços de sobrancelha e cílios com a Indianara',
  bronze: 'pelo Bronze Orgânico com a Indianara',
}
export type Chave = keyof typeof INTERESSE | 'duvida'

// Link do WhatsApp com a mensagem do serviço clicado
export function zap(chave?: Chave) {
  const texto =
    chave === 'duvida' ? 'Olá, Vivi! Vim pelo site e tenho uma dúvida.'
    : chave ? `Olá, Vivi! Vim pelo site, me interessei ${INTERESSE[chave]} e gostaria de saber mais e agendar um horário.`
    : 'Olá, Vivi! Vim pelo site e gostaria de agendar um horário.'
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`
}

// Loiros feitos pela Vivi (galeria em Mechas)
export const loiros = [
  { foto: '/img/mechas-1.jpg', alt: 'Loiro iluminado com raiz esfumada e pontas claras em ondas' },
  { foto: '/img/mechas-2.jpg', alt: 'Mechas loiras finas e uniformes em cabelo liso' },
]

export const INSTAGRAM = 'https://www.instagram.com/kauffhair/'
export const fora = { target: '_blank', rel: 'noopener' } as const

export const menu = [
  ['#servicos', 'Serviços'],
  ['#mechas', 'Mechas'],
  ['#noivas', 'Noivas'],
  ['#penteados', 'Penteados'],
  ['#maquiagem', 'Maquiagem'],
  ['#sobre', 'Sobre'],
] as const

export const faixa = ['Mechas personalizadas', 'Noivas', 'Penteados de festa', 'Maquiagem', 'Sobrancelhas e cílios', 'Bronzeamento orgânico', 'Cortes']

// Serviços com foto do trabalho. "posicao" escolhe que parte da foto aparece no recorte do card.
export const servicos = [
  { titulo: 'Mechas personalizadas', texto: 'Loiros exclusivos, iluminados e uniformes, do bege perolado ao platinado.', chave: 'mechas', ancora: '#mechas', foto: '/img/mechas-2.jpg', posicao: 'center 40%' },
  { titulo: 'Noivas', texto: 'Cabelo e maquiagem para o grande dia, com prova antes.', chave: 'noivas', ancora: '#noivas', foto: '/img/noiva-7.jpg', posicao: 'center 15%' },
  { titulo: 'Penteados', texto: 'Para formaturas, madrinhas, debutantes e festas.', chave: 'penteado', ancora: '#penteados', foto: '/img/penteado-1.jpg', posicao: 'center 85%' },
  { titulo: 'Maquiagem', texto: 'Com a Dyo e a Karina, em harmonia com o penteado.', chave: 'maquiagem', ancora: '#maquiagem', foto: '/img/maquiagem-1.jpg', posicao: 'center 30%' },
  { titulo: 'Sobrancelhas e cílios', texto: 'Design, brow lamination, extensão de cílios e lash lifting com a Indianara.', chave: 'sobrancelha', ancora: '#sobrancelhas', foto: '/img/sobrancelha-2.jpg', posicao: '60% center' },
] as const

// Ainda sem foto: entram na mesma grade com um ícone no lugar da foto. Quando chegarem fotos, mover para a lista acima.
export const outrosServicos = [
  { titulo: 'Cortes', texto: 'Que valorizam o seu formato e a sua cor.', chave: 'corte', icone: 'tesoura' },
] as const

// Maquiadoras: cada uma com o retrato (cartão) e as próprias makes (galeria em Maquiagem)
export const maquiadoras = [
  { nome: 'Dyo', foto: '/img/dyo.jpg', posicao: 'center 20%', makes: [
    { foto: '/img/maquiagem-2.jpg', alt: 'Make com sombra rosada, delineado gatinho e pérolas acima dos olhos, com semipreso em cachos', posicao: 'center 20%' },
    { foto: '/img/maquiagem-3.jpg', alt: 'Noiva maquiada e sorrindo entre duas convidadas, diante de um arco de folhas', posicao: 'center 15%' },
    { foto: '/img/maquiagem-4.jpg', alt: 'Make com cílios marcados, pontos de brilho no canto dos olhos e batom com gloss', posicao: 'center 40%' },
  ] },
  { nome: 'Karina', foto: '/img/karina.jpg', posicao: 'center 25%', makes: [
    { foto: '/img/karina-1.jpg', alt: 'Make com sombra esfumada em tons de cobre, cílios marcados e batom nude acastanhado', posicao: 'center 30%' },
    { foto: '/img/karina-2.jpg', alt: 'Make com delineado gatinho, lápis azul na linha d\'água e pontos de brilho', posicao: 'center 35%' },
    { foto: '/img/karina-3.jpg', alt: 'Make com olhos esfumados em marrom, pele iluminada e batom rosado', posicao: 'center 30%' },
  ] },
]

// Trabalhos da Indianara (galeria em Sobrancelhas e cílios)
export const olhares = [
  { foto: '/img/sobrancelha-3.jpg', alt: 'Antes e depois do lash lifting: cílios retos em cima, curvados e alongados embaixo' },
  { foto: '/img/sobrancelha-2.jpg', alt: 'Sobrancelha desenhada e extensão de cílios volumosa', posicao: '60% center' },
  { foto: '/img/sobrancelha-5.jpg', alt: 'Antes e depois de brow lamination e lash lifting: fios da sobrancelha alinhados e cílios curvados', posicao: '60% center' },
  { foto: '/img/sobrancelha-4.jpg', alt: 'Cliente sorrindo com as sobrancelhas desenhadas e alinhadas' },
]

export const penteados = [
  { foto: '/img/penteado-1.jpg', alt: 'Coque baixo com tranças e grampos dourados de pérola', titulo: 'Coque baixo com tranças', texto: 'Grampos de pérola e acabamento romântico' },
  { foto: '/img/penteado-7.jpg', alt: 'Semipreso com trança bolha no centro e ondas longas', titulo: 'Semipreso trançado', texto: 'Trança bolha com ondas longas' },
  { foto: '/img/penteado-3.jpg', alt: 'Ondas soltas e naturais', titulo: 'Ondas soltas', texto: 'Natural e sofisticado' },
  { foto: '/img/penteado-2.jpg', alt: 'Coque alto torcido', titulo: 'Coque alto', texto: 'Elegante e firme a festa toda' },
  { foto: '/img/penteado-8.jpg', alt: 'Noiva de costas com coque torcido e arranjo de flores e pérolas', titulo: 'Coque de noiva', texto: 'Torcido, com arranjo de pérolas' },
  { foto: '/img/penteado-4.jpg', alt: 'Cachos definidos com mechas iluminadas', titulo: 'Cachos definidos', texto: 'Volume, textura e brilho' },
  { foto: '/img/penteado-5.jpg', alt: 'Coque alto volumoso com um cacho solto ao lado do rosto', titulo: 'Coque volumoso', texto: 'Com um cacho solto emoldurando o rosto' },
  { foto: '/img/penteado-6.jpg', alt: 'Cabelo longo com cachos definidos', titulo: 'Cachos longos', texto: 'Definidos, com volume e movimento' },
]

// confirmar as respostas com a cliente
export const perguntas = [
  ['Quanto tempo leva para fazer mechas?', 'Depende do comprimento, do volume e da cor de partida. Envie uma foto do seu cabelo pelo WhatsApp e a Vivi passa uma estimativa.'],
  ['Qual o valor das mechas?', 'O valor é definido conforme o comprimento, o volume e a técnica. Com uma foto do seu cabelo, você recebe o orçamento pelo WhatsApp.'],
  ['De quanto em quanto tempo faço a manutenção?', 'Varia com a técnica e com o crescimento do seu cabelo. No atendimento você já sai sabendo quando voltar e como cuidar da cor em casa.'],
  ['Noivas: precisa fazer prova?', 'Sim. A prova serve para testar penteado e maquiagem antes do grande dia. Reserve sua data com antecedência, porque a agenda de casamentos lota rápido.'],
]
