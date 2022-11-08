import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../components/landing/Main/Main';
import AboutProgram from './landing/AboutProgram/AboutProgram';
import Portfolio from './landing/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/programs/:id' element={<AboutProgram />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
