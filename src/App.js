import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Nati Girma" age="19" bio="A tech enthusiast exploring beautiful cities and innovative ideas." />
      <Footer />
    </div>
  );
}

export default App;
