import { useDispatch } from "react-redux";
import { ToDOList } from "../../actions/index";

import { RiTodoLine } from "react-icons/ri";
import { BsListUl, BsCalendar, BsClock } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";

import { useForm } from "react-hook-form";

const AddToDoForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmit = (data, e) => {
    e.preventDefault();

    if (data) {
      dispatch(ToDOList({ data: data, status: false }));
    }
    reset();
  };

  return (
    <>
      <div className="addToDoForm">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="formGroup">
            <div className="formControl">
              <label>
                <RiTodoLine />
              </label>
              <input
                {...register("plan", { required: "Please add your plan" })}
                placeholder="Add Your Plan"
                autoComplete="off"
              />
            </div>
            {errors.plan && (
              <span className="error">{errors.plan.message}</span>
            )}
          </div>

          <div className="formGroup">
            <div className="formControl">
              <label>
                <BsListUl />
              </label>
              <input
                {...register("category", { required: "Please add category" })}
                placeholder="Add Category"
                autoComplete="off"
              />
            </div>
            {errors.category && (
              <span className="error">{errors.category.message}</span>
            )}
          </div>

          <div className="formGroup">
            <div className="formControl">
              <label>
                <BsCalendar />
              </label>
              <input type="date" {...register("date", { required: "Please mention task' date" })} />
            </div>
            {errors.date && (
              <span className="error">{errors.date.message}</span>
            )}
          </div>

          <div className="formGroup">
            <div className="formControl">
              <label>
                <BsClock />
              </label>
              <input type="time" {...register("time")} />
            </div>
          </div>

          <div className="formGroup">
            <div className="formControl">
              <label>
                <BiNotepad />
              </label>
              <textarea
                {...register("note")}
                placeholder="Add Aditional Note"
              ></textarea>
            </div>
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default AddToDoForm;
