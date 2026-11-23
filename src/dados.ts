// Conteúdo da página num lugar só: WhatsApp, serviços, penteados e perguntas.
// Fotos ficam em public/img (versões de 1080px tiradas do Instagram público).

// WhatsApp da Kauffhair (+55 45 99948-9990)
export const WHATSAPP = '5545999489990'

const INTERESSE = {
  mechas: 'pelas mechas personalizadas',
  noivas: 'pelo atendimento de noivas (cabelo e maquiagem)',
  penteado: 'por penteado',
  maquiagem: 'por maquiagem',
  corte: 'por corte',
  sobrancelha: 'pelo design de sobrancelhas',
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

// Fotos do antes e depois (comparador e card de Mechas). Vazio = placeholder em degradê.
// Quando chegarem fotos boas: colocar em public/img e preencher, ex.: antes: '/img/mechas-antes.jpg'
export const antesDepois = { antes: '', depois: '', montagem: '' }

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

export const faixa = ['Mechas personalizadas', 'Noivas', 'Penteados de festa', 'Maquiagem', 'Cortes', 'Design de sobrancelhas']

// Serviços com foto do trabalho. "posicao" escolhe que parte da foto aparece no recorte do card.
export const servicos = [
  { titulo: 'Mechas personalizadas', texto: 'Loiros exclusivos, iluminados e uniformes, do bege perolado ao platinado.', chave: 'mechas', ancora: '#mechas', foto: antesDepois.montagem, posicao: 'center 30%', legenda: 'Antes e depois' },
  { titulo: 'Noivas', texto: 'Cabelo e maquiagem para o grande dia, com prova antes.', chave: 'noivas', ancora: '#noivas', foto: '/img/noiva-1.jpg', posicao: 'center 25%' },
  { titulo: 'Penteados', texto: 'Para formaturas, madrinhas, debutantes e festas.', chave: 'penteado', ancora: '#penteados', foto: '/img/penteado-1.jpg', posicao: 'center 60%' },
  { titulo: 'Maquiagem', texto: 'Com a equipe Dyo, Kari e Sthe, em harmonia com o penteado.', chave: 'maquiagem', ancora: '#maquiagem', foto: '/img/maquiagem-1.jpg', posicao: 'center 30%' },
] as const

// Ainda sem foto: aparecem numa linha "Também fazemos". Quando chegarem fotos, mover para a lista acima.
export const outrosServicos = [
  { titulo: 'Cortes', texto: 'Que valorizam o seu formato e a sua cor.', chave: 'corte', icone: 'tesoura' },
  { titulo: 'Design de sobrancelhas', texto: 'O acabamento que emoldura o olhar.', chave: 'sobrancelha', icone: 'olhar' },
] as const

export const penteados = [
  { foto: '/img/penteado-1.jpg', alt: 'Coque baixo com tranças e grampos dourados de pérola', titulo: 'Coque baixo com tranças', texto: 'Grampos de pérola e acabamento romântico' },
  { foto: '/img/penteado-2.jpg', alt: 'Coque alto texturizado', titulo: 'Coque alto', texto: 'Elegante e firme a festa toda' },
  { foto: '/img/penteado-3.jpg', alt: 'Ondas soltas e naturais', titulo: 'Ondas soltas', texto: 'Natural e sofisticado' },
  { foto: '/img/penteado-4.jpg', alt: 'Cachos definidos com mechas iluminadas', titulo: 'Cachos definidos', texto: 'Volume, textura e brilho' },
]

// confirmar as respostas com a cliente
export const perguntas = [
  ['Quanto tempo leva para fazer mechas?', 'Depende do comprimento, do volume e da cor de partida. Envie uma foto do seu cabelo pelo WhatsApp e a Vivi passa uma estimativa.'],
  ['Qual o valor das mechas?', 'O valor é definido conforme o comprimento, o volume e a técnica. Com uma foto do seu cabelo, você recebe o orçamento pelo WhatsApp.'],
  ['De quanto em quanto tempo faço a manutenção?', 'Varia com a técnica e com o crescimento do seu cabelo. No atendimento você já sai sabendo quando voltar e como cuidar da cor em casa.'],
  ['Noivas: precisa fazer prova?', 'Sim. A prova serve para testar penteado e maquiagem antes do grande dia. Reserve sua data com antecedência, porque a agenda de casamentos lota rápido.'],
]
