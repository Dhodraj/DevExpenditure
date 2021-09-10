import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import styled from "styled-components"

// Initial state
const initialState = {
  transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <Wrapper>
  <GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
          <div className="childrendiv">
    {children}
    </div>

  </GlobalContext.Provider>
  </Wrapper>);
}

const Wrapper = styled.div`
text-transform:inherit;
`