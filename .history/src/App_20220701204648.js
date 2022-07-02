import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Todo from './components/Todo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/" element={<Todo />} />
            </Routes>
        </Router>
    );
}

export default App;
