// Add Local Components
import { NavBar, Banner, Skills, Projects, Contact, Footer } from './components';

// Add Local CSS
import './stylesheets/App.css';

// Add Boostrap CSS Styling
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
