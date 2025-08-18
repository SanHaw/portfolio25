import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* force these to 404 for now */}
            <Route path="/projects/:slug" element={<NotFound />} />
            <Route path="/blog/*" element={<NotFound />} />
            {/* catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}


// import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// import About from './pages/About';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import Projects from './pages/Projects';

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-1">
//         <Routes>
//           {/* Working pages */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Force these to 404 for now */}
//           <Route path="/projects/:slug" element={<NotFound />} />
//           <Route path="/blog/*" element={<NotFound />} />

//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }