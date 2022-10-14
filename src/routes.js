import React from "react";
import Home from "./routes/dashBoard";
import {Routes,Route,BrowserRouter} from 'react-router-dom'

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

