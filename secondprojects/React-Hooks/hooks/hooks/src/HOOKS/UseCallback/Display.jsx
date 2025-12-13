import React,{memo} from 'react'

const Display = ({alldata}) => {
  console.log("display called")
  return (
    <div>
       <table border={2}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>salary</th>
              <th>action</th>

            </tr>
          </thead>
          <tbody>
            {
              alldata.map((i,index)=>{
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>
                      <button onClick={()=>editdata(index)}>Edit</button>
                      <button onClick={()=>deldata(index)}>delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default memo(Display)
