import './App.css';
import './components/Footer';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <div className='head'>
        <Header/>
        <Nav/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
