/* eslint-disable react/prop-types */
function CategoryList({ children }) 
{
    return(
        <ul className='categoriesList'>
            {children}
        </ul>
    );
}

export { CategoryList };