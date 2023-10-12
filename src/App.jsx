
import NavBar from './components/NavBar/NavBar';
import TextoHome from './components/ItemListContainer/ItemListContainer';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './components/NavBar/NavBar.css'
import './components/ItemListContainer/ItemListContainer.css'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <TextoHome greeting='GALERIA' />
      </div>
    </>
  )
}

export default App
