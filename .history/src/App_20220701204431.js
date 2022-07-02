import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome.'

import Todo from './components/Todo';

function App() {
    <Router>
        <Routes>
            <Route path="/welcome" component={<Welcome />}
        </Routes>
    </Router>
}

export default App;
