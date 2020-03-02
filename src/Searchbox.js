import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
  return (
    <div>
      <input
        className='pa3 br3 ba b--green bg-lightest-blue'
        type="search"
        placeholder="Search girlfriends"
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbox;