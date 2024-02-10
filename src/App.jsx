import './styles/App.css'
import NavBar from './components/NavBar.jsx'
import ItemListConteiner from './components/ItemListConteiner.jsx'

export const App = () => {

  return (
    <>
      
      <NavBar/>
      <ItemListConteiner greeting={'B I E N V E N I D O'} />
      
    </>
  )
}

export default App