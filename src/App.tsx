import 'bootstrap/dist/css/bootstrap.css'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home'

const colors = {
  colorBlack: "#000000",
  colorGrey: "#9B9B9B",
  colorRed: "#ED1B24",
  colorWhite: "#FFFFFF"
}

const App = () => {
  return (
    <>
      <ThemeProvider theme={colors}>
        <Home/>
      </ThemeProvider>
    </>
  )
}
export default App