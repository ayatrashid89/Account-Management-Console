import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Component/MainComponent';
import About from './Component/About';
import Contact from './Component/Contact';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';

class  App extends Component {
  
render(){
  return (
    <div className="App">
    <BrowserRouter>
  
    <Switch>
        <Route exact path='/' component={Main}  />   
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route path='./' />
        </Switch>
        </BrowserRouter>
        </div>
  );
}
}

export default App;
