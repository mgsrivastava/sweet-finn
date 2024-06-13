import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FinnStory from "./pages/FinnStory";
import Gallery from "./pages/Gallery";
import HunterOfAges from "./pages/HunterOfAges";
import MasterOfDisguise from "./pages/MasterOfDisguise";
import Memories from "./pages/Memories";
import PettingSimulator from "./pages/PettingSimulator";
import { PATHS } from "./paths";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path={PATHS.STORY} element={<FinnStory />} />
        <Route path={PATHS.GALLERY} element={<Gallery />} />
        <Route path={PATHS.HUNTER_OF_AGES} element={<HunterOfAges />} />
        <Route path={PATHS.MASTER_OF_DISGUISE} element={<MasterOfDisguise />} />
        <Route path={PATHS.MEMORIES} element={<Memories />} />
        <Route path={PATHS.PETTING_SIMULATOR} element={<PettingSimulator />} />
      </Routes>
    </div>
  );
}

export default App;
