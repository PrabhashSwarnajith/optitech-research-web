import Home from './pages/Home';
import Domain from './pages/Domain';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Presentations from './pages/Presentations';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <Domain />
        <Milestones />
        <Documents />
        <Presentations />
        <Contact />
      </main>
    </div>
  );
}

export default App;
