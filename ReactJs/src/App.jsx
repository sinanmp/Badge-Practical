import { useState } from 'react'
import './App.css'

function App() {
  const [sub, setSub] = useState([])

  const option =  [
    {
      category: 'Fruits',
      items: ['Apple', 'Banana', 'Orange', 'Grapes']
    },
    {
      category: 'Vegetables',
      items: ['Carrot', 'Broccoli', 'Lettuce', 'Tomato']
    }
  ]

  return (
    <>
     <div style={{display:'flex' , justifyContent:'center'}}>
          <select name="" id="">
           {option.map((item)=>{
            return(
              <option onClick={()=>setSub(item.items)} value={item.category}>{item.category}</option>
            )
           })}
          </select>
          {sub &&  
          <select name="" id="">
            {sub.map((item)=>{
              <option key={item} value={item}>{item}</option>
            })}
          </select>
          }
     </div>
    </>
  )
}

export default App
