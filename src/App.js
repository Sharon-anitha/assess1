import './App.css';
import Circle from './components/Circle';
import User from './components/User';
import UserDetails from './components/UserDetails';
import NotFound from './components/NotFound';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <BrowserRouter basename={process.env.PUBLIC_URL}>
   
   <Routes>  
   <Route exact path = "/" element = {<Circle />}> </Route>
   <Route path = "/task1" element= {<Circle />} ></Route>
   <Route path = "/task2" element= {<User/>} ></Route>
   <Route path = "/task3" element= {<UserDetails />} ></Route>
<Route path = "/circle" element= {  <Circle />}></Route>
<Route path = "/user/:count" element= {<User />} ></Route>
<Route path = "/userdetails" element= {<UserDetails />} ></Route>
<Route  path ="*" component={<NotFound/>} />

</Routes>
</BrowserRouter>
  
   </div>
  );
}

export default App;
