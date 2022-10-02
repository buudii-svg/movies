import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import People from './Components/People/People.jsx';
import Networks from './Components/Networks/Networks';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import TV from './Components/TV/TV';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/tv' component={TV} />
        <Route path='/people' component={People} />
        <Route path='/networks' component={Networks} />
        <Route path='/login' component={Login} />
        <Redirect exact from='/' to='/login' />
        <Route path='*' component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
