export const UserName = (data) => {
    return {
        type: "USER_NAME",
        payload: data
    }
}

export const ToDOList = ({data, status}) => {
    return {
        type: "ADD_TO_DO",
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            status: status
        }
    }
}

export const UpdateStatus = (id) => {
    return {
        type: "UPDATE_STATUS",
        id
    }
}

export const DeleteToDo = (id) => {
    return {
        type: "DELETE_TO_DO",
        id
    }
}

export const FilterCategory = (text) => {
    return {
        type: "FILTER_CATEGORY",
        text
    }
}