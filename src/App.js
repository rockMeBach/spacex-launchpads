import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Launchpads from './screens/Launchpads';
import LaunchInfo from './screens/LaunchInfo';
import Error404 from './screens/404';
import SiteNavbar from './components/SiteNavbar';
import Footer from './components/Footer';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Router>
      <SiteNavbar />
      <Routes>
        <Route path="/">
          <Route index element={<Launchpads />} />
          <Route path="launchinfo" element={<LaunchInfo />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
