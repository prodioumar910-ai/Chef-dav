/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Team from './components/Team';
import Location from './components/Location';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-chef-black text-chef-offwhite font-sans selection:bg-chef-white selection:text-chef-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <Team />
        <Location />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}

