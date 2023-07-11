import Navbar from './component/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Project from './component/Project'
import Contant from './component/Contant'
function App() {
  return (
    <div>
      <Navbar/>
        
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contant' element={<Contant/>}/>
          <Route path='home/about' element={<About/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
