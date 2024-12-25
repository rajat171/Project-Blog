import React from 'react'

function Container({children}) {
    // whenever we want to include a common
    // div in the components we use these type
    // of containers where all the childrens are
    // included inside this component
  return <div className='w-full max-w-7xl mx-auto px-4 '>
        {children}</div>;
}

export default Container