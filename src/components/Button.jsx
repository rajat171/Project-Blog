import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',//if user passes other classnames these will be usefull
    ...props  //other props like placeholder.
}) {
  return (
    <>
    <button className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${type}
        ${className}`} {...props}>
        {children}
    </button>
    </>
  )
}

export default Button