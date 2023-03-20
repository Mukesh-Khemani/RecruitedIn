import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./App.css"
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path='/home' element={<><Header/><Home/></>}/>
        </Routes>
      </Router>
  );
}

export default App;
