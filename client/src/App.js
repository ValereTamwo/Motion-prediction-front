import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AuthA from './pages/signIn/Auth';
import SignIn from './pages/signIn/SignIn';
import { UserProvider } from './contexts/SignInContext';
import Home from './pages/Home';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      
        <Routes>

          <Route exact path='/dashboard' element={<Dashboard />}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path = '/auth' element={<SignIn/>}></Route>
        </Routes> 
      
      </BrowserRouter>
      </UserProvider>
    )}

export default App;
