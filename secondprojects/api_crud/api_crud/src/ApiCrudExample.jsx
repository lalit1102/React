import React, { useState } from 'react'

const ApiCrudExample = () => {
  const [data,setData] = useState({
    firstname:"",
    lastname:"",
    age:""
  })

  
  const handleChange =(e)=>{
    let {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }
  // allData ma ek karta vadhare jyare input ma data ave che tyare te array na form ma save karva mate 
  const [alldata,setAlldata] = useState([])
  const handleSubmit = (e) =>{
    e.preventDefault(),
    setAlldata([
      ...alldata,
      data
    ])
  }

  return (
  <>
    <div>
      <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Api_Crud Example</h1>
       <form action="#" method="post" name="frm" className="max-w-md mx-auto p-4 bg-white rounded shadow" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-gray-700 font-semibold mb-2">
              Enter FirstName
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2      focus:ring-indigo-500"
              type="text"
              name="firstname"
              id="firstname"
              onChange={handleChange}
              value={data.firstname}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="lastname" className="block text-gray-700 font-semibold mb-2">
              Enter LastName
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2      focus:ring-indigo-500"
              type="text"
              name="lastname"
              id="lastname"
              value={data.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
              Age
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2      focus:ring-indigo-500"
              type="number"
              name="age"
              id="age"
              value={data.age}
              onChange={handleChange}

            />
          </div>
          <div>
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded focus:outl focus:ring-2 focus:ring-indigo-500" >Save</button>
             <button type="reset" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded 
                focus:outl focus:ring-2 focus:ring-indigo-500" >reset</button>
          </div>
        </form>
              <table className="min-w-full bg-white border border-gray-200 rounded-md overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left text-gray-700 border-b border-gray-200">Id</th>
                      <th className="py-2 px-4 text-left text-gray-700 border-b border-gray-200">FirstName</th>
                      <th className="py-2 px-4 text-left text-gray-700 border-b border-gray-200">LastName</th>
                      <th className="py-2 px-4 text-left text-gray-700 border-b border-gray-200">Age</th>
                      <th className="py-2 px-4 text-left text-gray-700 border-b border-gray-200">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      alldata.map((i,index)=>{
                        return(
                          <tr>
                            <td className="py-2 px-4 border-b border-gray-200">{index+1}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{i.firstname}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{i.lastname}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{i.age}</td>
                            <td className="py-2 px-4 border-b border-gray-200"></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
              </table>
        </div>

    </>
  )
}

export default ApiCrudExample
