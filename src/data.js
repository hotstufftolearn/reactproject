import {useState} from 'react'
function Appc() {
  const [value, setValue] = useState(42)
  return (
    <>
    <div>
     
     <div className='counter'> <h2>Counter</h2>
     </div>
     <div className='val'><p>{value}</p>
     </div>
      <div className='button'>
      <button className='btn1' onClick={() => setValue(value + 1)}>+</button>

  <div class="space">
  </div>

      <button className='btn2' onClick={() => setValue(value - 1)}>-</button>
      </div>

      

    </div>
    </>
  )


}

export default Appc;
