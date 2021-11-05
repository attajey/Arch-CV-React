import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainCv from "./MainCv";

const App = () => {
    return (
        <BrowserRouter>
            <MainCv />
        </BrowserRouter>
    );
};

export default App;
