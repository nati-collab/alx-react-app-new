import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Nati" age={21} bio="Aspiring full-stack developer" />
      <Footer />
    </>
  );
}

export default App;
