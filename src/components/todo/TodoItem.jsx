import { FcCheckmark } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";

/* eslint-disable react/prop-types */
function TodoItem({ text, completed, onCompleted, onDeleted }) {
    return(
        <li className="todoItem ">
            <span onClick={onCompleted} className={`btn-cursor ${ completed && "text-success" }`}>
                { completed ? <FcCheckmark /> : "○" }
            </span>
            <p className={`${ completed && "text-tached text-bold" }`}>
                { text }
            </p>
            <span onClick={onDeleted} className="btn-cursor">
                <FcEmptyTrash />
            </span>
        </li>
    );
}

export { TodoItem };
  