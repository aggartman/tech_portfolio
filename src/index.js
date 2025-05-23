import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';

import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

const Index = () => {
    setToLS('all-themes', themes.default);
    return(
        <App />
    )
}

createRoot(document.getElementById('root')).render(<Index />)