import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BirthdayGallery from '../pages/BirthdayGallery';
import Menu from '../pages/Menu';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/birthday-gallery" element={<BirthdayGallery />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes here */}
        </Routes>
    );
};

export default AppRoutes; 