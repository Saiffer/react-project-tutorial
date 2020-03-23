const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
  users: []
  // users: [
  //   { id: 1, 
  //     fullName: 'Dima', 
  //     status: 'I\'m a boss',
  //     location: {city: 'Minsk', country: 'Belarus'} ,
  //     followed: false,
  //     photoUrl: 'https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/051_user_profile_avatar-128.png'
  //   },
  //   { id: 2, 
  //     fullName: 'Tony', 
  //     status: 'I love coffee',
  //     location: {city: 'Raleigh', country: 'USA'},
  //     followed: false,
  //     photoUrl: 'https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/051_user_profile_avatar-128.png'
  //   },
  //   { id: 3, 
  //     fullName: 'Sarah', 
  //     status: 'I love catzzzz',
  //     location: {city: 'London', country: 'UK'},
  //     followed: true,
  //     photoUrl: 'https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/051_user_profile_avatar-128.png'
  //   },
  //   { id: 4, 
  //     fullName: 'Givi', 
  //     status: 'Suda IDI E',
  //     location: {city: 'Tbilisi', country: 'Georgia'},
  //     followed: true,
  //     photoUrl: 'https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/051_user_profile_avatar-128.png'
  //   },
  // ],
  
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FOLLOW: 
        return {
          ...state, 
          users: state.users.map( (u) => {
            if(u.id === action.userId) {
              return {...u, followed: true}
            }
            return u;
          })
        };
        case UNFOLLOW:
        return {
          ...state, 
          users: state.users.map( (u) => {
            if(u.id === action.userId) {
              return {...u, followed: false}
            }
            return u;
          })
        };
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }

    default:
      return state
  }
}
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
