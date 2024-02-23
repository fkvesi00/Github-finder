import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';

import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
            
            <Navbar />
            
            <main className='container mx-auto px-3 pb-12'>
            <Alert/>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/user/:login' element={<User />}/>
                <Route exact path='/about' element={<About />}/>
                <Route exact path='/*' element={<NotFound />}/>
            </Routes>
            </main>
            <Footer />
        </div>
      </Router>
      </AlertProvider>
      </GithubProvider>
  );
}

export default App;
