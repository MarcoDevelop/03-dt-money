import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContexts'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
