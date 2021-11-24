const initData = {
  filterTerm: '',
  list: [],
};

const ToDoReducer = (state = initData, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      const { id, data, status } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            status: status,
          },
        ],
      };

    case "UPDATE_STATUS":
      const index = state.list.findIndex((item) => item.id === action.id);
      const newArray = [...state.list];

      newArray[index].status = !newArray[index].status;
      return {
        ...state,
        list: newArray,
      };
      
    case "DELETE_TO_DO":
      const newList = state.list.filter((el) => el.id !== action.id);
      return {
        ...state,
        list: newList,
      };

      case "FILTER_CATEGORY": 
      // const filteredList = state.list.filter(item=>item.category !== action.category)
      return {
        ...state,
        filterTerm: action.text
      }

    default:
      return state;
  }
};

export default ToDoReducer;
