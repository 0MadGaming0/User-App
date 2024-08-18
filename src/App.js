import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUsers from './components/AddUsers';
import SearchUser from './components/SearchUser';
import ViewallUsers from './components/ViewallUsers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddUsers/>}/>
      <Route path="/search" element={<SearchUser/>}/>
      <Route path="/view" element={<ViewallUsers/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
