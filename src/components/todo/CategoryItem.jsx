/* eslint-disable react/prop-types */
function CategoryItem({ text, selectedCategory }) {
    return(
        <li className="categoryItem" onClick={selectedCategory}>            
            { text }           
        </li>
    );
}

export { CategoryItem };