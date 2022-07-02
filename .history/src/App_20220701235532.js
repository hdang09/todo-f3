import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Todo from './components/Todo';
import LogIn from './components/LogIn';

import fs from 'fs';
console.log(fs);

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
                            <Welcome />
                        )
                    }
                />
                <Route
                    path="/login"
                    element={<LogIn func={handleSetLoggedIn} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
