import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home'; // <--- Import it here
import About from './pages/About';
import Contact from './pages/Contact';

// Inside your Routes...
<Route path="about" element={<About />} />


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* This renders Home inside MainLayout's <Outlet /> at the "/" path */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
