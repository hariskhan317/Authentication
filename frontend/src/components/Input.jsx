import React from 'react' 

const Input = ({ value, label,name, type, onChange }) => {
  return (
    <div>
      <label className=''>{label}</label>
      <input
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