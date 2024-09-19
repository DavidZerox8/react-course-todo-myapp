function TodoSearch() 
{
    return(
        <input onChange={(event) => {
            console.log("Se busco la palabra: " + event.target.value);            
        }} id="search" name="search" className="input" placeholder="Search task" />
    );
}

export { TodoSearch };