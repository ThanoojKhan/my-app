import Timer from './page/Timer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UseEffect from './page/UseEffect';
import Home from './page/Home';
import Counter from './page/Counter';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timer' element={<Timer/>} />
        <Route path='/useffect' element={<UseEffect />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </Router>
  );

}

export default App;
