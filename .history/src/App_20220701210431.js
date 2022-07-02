import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Todo from './components/Todo';
import LogIn from './components/LogIn';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSetLoggedIn = () => {
        setLoggedIn(true);
    };

    const handleSetLoggedOut = () => {
        setLoggedIn(false);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        loggedIn ? (
                            <Todo func={handleSetLoggedOut} />
                        ) : (
                            <Welcome func={handleSetLoggedIn} />
                        )
                    }
                />
                <Route path="/login" element={<LogIn />} /
            </Routes>
        </Router>
    );
}

export default App;
