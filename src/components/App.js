import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App(){
    return (
    <Router>
        <Route path='/' exat component={Home}></Route>
        <Route path='/:id' exat component={Detail}></Route>
    </Router>
    )
}

export default App;