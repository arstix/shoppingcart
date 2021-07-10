export default (state, action) => {
  switch (action.type) {
  case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
  case 'USE_COUNTS_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
    throw new Error('Unsupported action type of useCounts');
  }
};
