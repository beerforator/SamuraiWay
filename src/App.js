import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
