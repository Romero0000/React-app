import { MainLayout } from './components/MainLayout';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return <BrowserRouter>
  <Routes>
    <Route element={<MainLayout/>}>
      <Route path="/" element={<div>Home</div>}/>
      <Route path="/forbidden" element={<div>Forbidden..</div>}/>
      <Route path="/addquestion" element={<div>Add question</div>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  }


  export default App


