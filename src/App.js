import './App.css';
import * as React from "react";
import Navigation from './navigation';
import SeePic from './seePic';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from './table';
import A from './a';



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <A/>
                <div className="content">
                    <Routes>
                        <Route path="/seePic" element={<SeePic />} />
                        <Route path="/table" element={<Table />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
