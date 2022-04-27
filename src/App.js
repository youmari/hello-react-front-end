import { Routes, Route } from 'react-router'
import Greeting from './Greeting';
import './App.css';
const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route element={<Greeting />} path="/" />
      </Routes>
    </>
  );
};

export default App;
