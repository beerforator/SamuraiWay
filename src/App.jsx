import './App.css';
import Header from './components/header/Header';
import Messages from './components/messages/Messages';
import Music from './components/music/Music';
import Navigation from './components/navigation/Navigation';
import News from './components/news/News';
import Profile from './components/profile/Profile';
import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation peoplesDB={props.store.GetState().peoplesDB} />
        <div className="main_page">
          <Routes>
            <Route
              path="/profile"
              element={<Profile
                postsListDB={props.store.GetState().postsListDB}
                AddPost={props.store.AddPost.bind(props.store)}
                tAreaStuff={props.store.GetState().textAreas}
                OnPostTAChange={props.store.OnPostTAChange.bind(props.store)} />} />
            <Route
              path='/messages/*'
              element={<Messages
                chatListDB={props.store.GetState().chatListDB}
                messagesListDB={props.store.GetState().messagesListDB}
                AddMessage={props.store.AddMessage.bind(props.store)}
                tAreaStuff={props.store.GetState().textAreas}
                OnMessageTAChange={props.store.OnMessageTAChange.bind(props.store)} />} />
            <Route
              path='/news'
              element={<News />} />
            <Route
              path='/music'
              element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
