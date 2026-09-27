import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landingpage from './pages/Landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/videomeet';
import HomeComponent from './pages/home';
import History from './pages/history';


function App() {
  
  return (
    <>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/home' element={<HomeComponent/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/:url' element={<VideoMeetComponent/>} />
        </Routes>
      </AuthProvider>
    </Router>

      </>
  )
}

export default App
