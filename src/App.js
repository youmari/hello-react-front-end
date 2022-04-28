import { Routes, Route } from 'react-router';
import Greeting from './Greeting';

const App = () => (
  <>
    <Routes>
      <Route element={<Greeting />} path="/" />
    </Routes>
  </>
);

export default App;
