import { CLOSE_AUTH_MODAL,
    LOGIN,
    LOGOUT,
    OPEN_AUTH_MODAL } from '../constant';

const authHandler = {
    [OPEN_AUTH_MODAL](state, {formType}){
        return {
            ...state,
            formType: formType,
            isModalOpen: true,
        }
    },
    [CLOSE_AUTH_MODAL](state){
        return {
            ...state,
            isModalOpen: false,
        };
    },
    [LOGIN](state, {session}) {
        return {
            ...state,
            session: session,
        };
    },
    [LOGOUT](state){
        return {
            ...state,
            session: null,
        };
    },
}

export const authReducer = (state, action) => {
    const handler = authHandler[action.type]
    return handler? handler(state, action): state
};
