import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numofIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of icecreams - {numofIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecreams</button>
      <input
        type="number"
        value={value}
        onChange={e => setValue(parseInt(e.target.value))} id="" />
      <button onClick={() => dispatch(restocked(value))}>Restock icecreams</button>
    </div>
  )
}

// export default IcecreamView;
