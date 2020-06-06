import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter } from 'react-router-dom';
import Main from './Component/MainComponent'
import './App.css';

class  App extends Component {
  
render(){
  return (
   
    <div className="App">
     <Main />
    </div>
    
  );
}
}

export default App;
