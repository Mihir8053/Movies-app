import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import Pagination from './Components/Pagination';
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom" 
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={(
          <>
            <Banner/>
            <Movies/>
          </>
        )} />
        <Route path='/favourites' Component={Favourites}></Route>
      </Routes>
      {/* <Favourites/> */}
    </Router>
  );
}

export default App;
