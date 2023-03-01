import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from './MainPage'
import Display from './Display'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <MainPage/>}/>
    <Route path='/display' element={ <Display/>} />
    </Routes>
  </BrowserRouter>
  )
  
}

export default App
