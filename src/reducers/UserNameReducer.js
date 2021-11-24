const initData = '';

const UserNameReducer = (state=initData, action) => {
    switch (action.type) {
        case "USER_NAME" :
            return action.payload;
        default: return state
    }
}

export default UserNameReducer;