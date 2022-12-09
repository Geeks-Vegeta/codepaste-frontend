import React from "react";
import Home from "./pages/Home";
import Paste from "./pages/Paste";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App=()=>{

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<Home />}/>
                <Route exact path="paste/:id" element={<Paste/>}/>
            </Routes>
        </BrowserRouter>

        </>
    )

}
export default App;