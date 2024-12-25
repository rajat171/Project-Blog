import React ,{useId} from 'react'

function Select({
    options=[],
    label,
    className = '',
    ...props
}, ref) {
  const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''>
            {label}</label>}
        <select 
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white
        text-black outline-none focus:bg-gray-50
        duration-200 border border-gray-200 w-full
        ${className}`}>
            //first check whether there are elements in the array
            //or else it will crash
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}
//we can specify the forward ref hook while exporting also
export default React.forwardRef(Select)