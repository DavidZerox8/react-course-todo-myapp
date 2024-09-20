/* eslint-disable react/prop-types */
function CategoryItem({id, text, setCategorySearch }) {
    return(
        <li className="categoryItem" onClick={() => {            
            setCategorySearch(id);
        }}>            
            { text }           
        </li>
    );
}

export { CategoryItem };