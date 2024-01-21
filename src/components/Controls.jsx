import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

export default function Controls() {
    const dispatch = useDispatch();
    const inputValue = useRef();
    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };
    const handleAdd = () => {
        dispatch(counterActions.add(parseInt(inputValue.current.value)));
        inputValue.current.value = '';
    };
    const handleSub = () => {
        dispatch(counterActions.sub(parseInt(inputValue.current.value)));
        inputValue.current.value = '';
    };
    const handleToggle = () => {
        dispatch(privacyActions.handleToggle())
    };
    
  return (
    <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" onClick={handleIncrement} className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">+1</button>
            <button type="button" onClick={handleDecrement} className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">-1</button>
            <button type="button" onClick={handleToggle} className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Privacy Toggle</button>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
            <input type="text" ref={inputValue} className="form-control me-sm-1" id="floatingInput" placeholder="Enter Number"/>
            <button type="button" onClick={handleAdd} className="btn btn-outline-info btn-lg px-4 me-sm-1 fw-bold">Add</button>
            <button type="button" onClick={handleSub} className="btn btn-outline-info btn-lg px-4 me-sm-1 fw-bold">Sub</button>
        </div>
    </>
  )
}
