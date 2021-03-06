import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar'
import Skill from './Components/Skills/Skill';
import Experience from './Components/Experience/Experience'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'




function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Skill />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
