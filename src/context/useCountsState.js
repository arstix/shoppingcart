import React, { useReducer, useContext } from 'react';
import UseCountsContext from './useCountsContext';
import UseCountsReducer from './useCountsReducer';

export const useUseCounts = () => {
  const { state, dispatch } = useContext(UseCountsContext);
  return [state, dispatch];
};

export const setLoading = (dispatch) => dispatch({ type: 'SET_LOADING' });

const UseCountsState = ({children}) => {
  const initialState = {
    useCounts: [],
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(UseCountsReducer, initialState);

  return (
    <UseCountsContext.Provider value={{state, dispatch}}>
      {children}
    </UseCountsContext.Provider>
  );
};

export default UseCountsState;
