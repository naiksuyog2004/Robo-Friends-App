import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input className="bg-light-yellow ma2 pa2 br3" type="search" placeholder="Search Robots" onChange={searchChange} />
        </div>
    );
}

export default SearchBox