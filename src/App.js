import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUsers from './components/AddUsers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddUsers/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
