import React from "react";
import Header from "./Header"
import Node from "./Note";
import Footer from "./Footer"

function App(){
    return <div>
        <Header />
        <Node title="Ai" content="Artificial Intellignece" />
        <Node title="ML" content="machine learing" />
        <Footer />
    </div>
}

export default App