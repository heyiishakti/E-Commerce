
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router ,Switch,  Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register;


function App() {
  return (
    //BEM convention
   <Router>
      <div className="app">
      
        <Switch>
        <Route path='/login'>
            <Login/>
            </Route>
          <Route path='/checkout'>
             <Header />
            <Checkout/>
           </Route>
          <Register />
          <Route path='/'>
          <Header />
            <Home /> 
            </Route>
            </Switch>                           
      </div>
      </Router>
  );
}

export default App;
