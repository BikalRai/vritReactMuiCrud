import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
    // state for logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="App">
            <CssBaseline />
            <Layout
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                navigate={navigate}
            >
                <PrivateRoutes
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                    navigate={navigate}
                ></PrivateRoutes>
            </Layout>
        </div>
    );
}

export default App;
