export const auth = ({user, isAuth}) => {
  return {
    type: 'AUTH_LOGIN',
    payload: {
      user: user,
      isAuth: isAuth
    }
  }
}