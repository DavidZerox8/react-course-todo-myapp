/* eslint-disable react/prop-types */
function TodoItem({ text, completed, onCompleted, onDeleted }) {
    return(
        <li className="todoItem ">
            <span onClick={onCompleted} className={`${ completed && "text-success" }`}>
                ✔
            </span>
            <p className={`${ completed && "text-tached text-bold" }`}>
                { text }
            </p>
            <span onClick={onDeleted} className="btn-danger">
                X
            </span>
        </li>
    );
}

export { TodoItem };
  