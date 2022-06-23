import React from 'react';

export const SearchBox = (props) => {
	return (
        <div className="wrapper">
            <div className="search">
                <input
                        type='text'
                        value={props.value}
                        onChange={(event) => props.setSearchValue(event.target.value)}
                        placeholder='Type to search...'
                        ></input>
             </div>
        </div>
	);
};