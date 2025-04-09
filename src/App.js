
import './App.css';
import Address from './components/Address';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar1 from './components/Navbar1';
import Store from './components/Store';
import TodoApp from './components/Todolist';
import Watch from './components/Watch';
import { BrowserRouter as Router, Routes} from 'react-router-dom'; 

// import Weeks from './Weather/Weeks';


function App() {
  return (
      <div className="App">
       {/* <Weeks /> */}         
            <Navbar1 />
         
        <Router>
        <Routes path="/" element={<Home />} />
        <Routes path="/Store" element={<Store />} />
         </Router>
      
         <Home />
          <Watch />
          <Footer />
          <Store />
          <Address />
          <Explore />
          <TodoApp />
      </div> 
  );
};

export default App;
 
