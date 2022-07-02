import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Todo from './components/Todo';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/" element={<Todo />} />
            </Routes>
        </Router>
    );
}

export default App;
