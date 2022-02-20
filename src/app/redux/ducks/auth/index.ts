const LOG_IN = "REAL_STATE/AUTH/LOG_IN";

const LOG_OUT = "REAL_STATE/AUTH/LOG_OUT";

const REGISTER = "REAL_STATE/AUTH/REGISTER";

type AuthState = {
  isLoggedIn: boolean;
  email: string;
};

type AuthAction =
  | {
      type: typeof LOG_IN;
      payload: any;
    }
  | {
      type: typeof LOG_OUT;
    }
  | {
      type: typeof REGISTER;
      payload: any;
    };

const initialState: AuthState = {
  isLoggedIn: false,
  email: "",
};

export default function reducer(
  state: AuthState = initialState,
  action: AuthAction
) {
  switch (action.type) {
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        email: "",
      };
    case LOG_IN:
    case REGISTER:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload,
      };
    default:
      return state;
  }
}
