import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import DemoPie from './components/DemoPie';

function App() {
  return (
    <Router>
     
    <GlobalProvider>
    <Route exact path="/"> 
    <Header />
    </Route>
      <div className="container">
      <Switch>
        <Route exact path="/">
        
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
       <Link to="/pie"> <button className="pieChart">See Pie Chart</button> </Link>
       </Route>
       </Switch>
      </div>
      </GlobalProvider>

      
        <Route exact path="/pie">
          <Switch>
            <DemoPie/>
        </Switch>
        </Route>
       
    </Router>
  );
}

export default App;