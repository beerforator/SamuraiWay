import './App.css';
import Header from './components/header/Header';
import Messages from './components/messages/Messages';
import Music from './components/music/Music';
import Navigation from './components/navigation/Navigation';
import News from './components/news/News';
import Profile from './components/profile/Profile';
import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <div className="main_page">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path='/messages/*' element={<Messages />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
