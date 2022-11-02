// Formatar data
export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

// Formatar moeda
export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
