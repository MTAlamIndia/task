import { useDispatch, useSelector } from "react-redux";
import {FilterCategory} from "../../actions/index";

const CategoryList = ({fetchCatgory}) => {

  const toDoList = useSelector(state=>state.ToDoReducer.list)
  const dispatch = useDispatch()
  

  const listCategories = () => {
    const allCats = toDoList.map((item) => item.data);
    const filteredCats = [...new Set(allCats.map((item) => item.category))];
    
    return filteredCats;
  };
  return (
    <>
      <div className="list_cat_wise">
        <ul>
          {listCategories().map((item, i) => {
            return <li key={i} onClick={()=>fetchCatgory(dispatch(FilterCategory(item)))}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
