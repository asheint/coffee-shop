import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#faf6f1]">
        <Navbar />
        <main className="pt-16">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;