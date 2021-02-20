import React from 'react';
import './search-box.styles.css';

// This is function based component
export const SearchBox = ({ placeholder, handleChange }) => {
	return <input onChange={handleChange} className="search-input" type="search" placeholder={placeholder} />;
};
