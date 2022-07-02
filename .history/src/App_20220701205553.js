import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Todo from './components/Todo';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSetLoggedIn = () => {
        setLoggedIn(true);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        loggedIn ? (
                            <Todo />
                        ) : (
                            <Welcome func={handleSetLoggedIn} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
