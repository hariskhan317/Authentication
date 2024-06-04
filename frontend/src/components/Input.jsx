import React from 'react' 

const Input = ({label, value, type}) => {
  return (
    <div>
      <label className=''>{label}</label>
      <input className='mt-2 text-black border-2 w-full p-1' placeholder={label} name={value} type={type} />
    </div>
  )
}

 
export default Input