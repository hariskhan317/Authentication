import React from 'react' 

const Input = ({ value, label,name, type, onChange, defaultValue }) => {
  return (
    <div>
      <label className='text-left'>{label}</label>
      <input
        defaultValue={defaultValue}
        type={type}
        value={value}
        name={name}
        placeholder={label} 
        onChange={onChange}
        className='mt-2 text-black border-2 w-full p-1' />
    </div>
  )
}

 
export default Input