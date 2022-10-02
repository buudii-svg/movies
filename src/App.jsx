import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import People from './Components/People/People';
import Networks from './Components/Networks/Networks';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import TV from './Components/TV/TV';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/register' component={Register} />
        <ProtectedRoutes path='/home' component={Home} />
        <ProtectedRoutes path='/about' component={About} />
        <ProtectedRoutes path='/tvshow' component={TV} />
        <ProtectedRoutes path='/people' component={People} />
        <ProtectedRoutes path='/networks' component={Networks} />
        <Route path='/login' component={Login} />
        <Redirect exact from='/' to='/login' />
        <ProtectedRoutes path='*' component={NotFound} />
      </Switch>
    </>
  );
}

export default App;

