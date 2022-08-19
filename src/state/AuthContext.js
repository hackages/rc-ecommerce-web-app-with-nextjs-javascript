import { createContext, useContext, useEffect, useReducer } from 'react';
import { supabase } from '../utils/supabaseClient';
import { authReducer } from './reducers/authReducer';
import { FormType, LOGIN } from './constant';

const intialAuthState = {
  isModalOpen: false,
  formType: FormType.LOGIN,
  session: null,
};

export const AuthContext = createContext(intialAuthState);

export const useAuthContext = () => {
  const {
    state,
    dispatch,
  } = useContext(AuthContext);

  const { isModalOpen, formType, session } = state;


  return {
    isModalOpen,
    formType,
    session,
    dispatch
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, intialAuthState);

  useEffect(() => {
    dispatch({ type: LOGIN, session: supabase.auth.session });
    supabase.auth.onAuthStateChange((event, session) => {
      dispatch({ type: LOGIN, session });
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
