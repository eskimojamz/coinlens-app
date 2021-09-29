import '../styles/globals.css'
import { ContextWrapper } from '../context/store'

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  )
}

export default MyApp
