import './App.css';
import FriendsContainer from './components/friends/FriendsContainer';
import Header from './components/header/Header';
import MessagesContainer from './components/messages/MessagesContainer';
import Music from './components/music/Music';
import NavigationContainer from './components/navigation/NavigationContainer';
import News from './components/news/News';
import Profile from './components/profile/Profile';
import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <NavigationContainer />
                <div className="main_page">
                    <Routes>
                        <Route
                            path="/profile"
                            element={<Profile />}
                        />
                        <Route
                            path='/messages/*'
                            element={<MessagesContainer />}
                        />
                        <Route
                            path='/friends'
                            element={<FriendsContainer />}
                        />
                        <Route
                            path='/news'
                            element={<News />}
                        />
                        <Route
                            path='/music'
                            element={<Music />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
