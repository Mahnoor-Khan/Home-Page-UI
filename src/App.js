import './App.css';
import Hero from './Components/Hero'
import DJ from './Components/DJ'
import Songs from './Components/Songs'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App bg-[#000]">
      <Navbar />
      <Hero />
      <DJ />
      <Songs />
      <Footer />
    </div>
  );
}

export default App;
