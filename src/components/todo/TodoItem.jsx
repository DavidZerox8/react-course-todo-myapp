/* eslint-disable react/prop-types */
function TodoItem({ text, completed }) {
    return(
        <li className="todoItem ">
            <span className={`${ completed && "text-success" }`}>
                ✔
            </span>
            <p className={`${ completed && "text-tached text-bold" }`}>
                { text }
            </p>
            <span className="btn-danger">
                X
            </span>
        </li>
    );
}

export { TodoItem };
  