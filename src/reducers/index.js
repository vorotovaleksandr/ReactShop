export const initialState = {
  user: {},
  isAuth: false,
}


// export const authReducer= (state = initialState, action) => {
 
// }

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return ({ ...state, user: action.payload.user, isAuth: action.payload.isAuth  })

    default:
      return state
  }
}


