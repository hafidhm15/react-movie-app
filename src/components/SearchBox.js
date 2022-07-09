import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBox = (props) => {
  return (
    <div className="col col-sm-3 mt-3">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
