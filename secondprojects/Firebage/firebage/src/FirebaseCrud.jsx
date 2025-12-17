import React, { useState } from 'react'
import { db } from '../firebase'
import { addDoc,collection } from 'firebase/firestore'

const FirebaseCrud = () => {
  const [data,setData] = useState({
      name:"",
      email:"",
      pwd:"",
      
    })
     const [alldata,setAlldata] = useState([])
      const handlechange = (e) =>{
        const {name,value} = e.target
        setData({
          ...data,
          [name]:value
        })
      }
       
      const savedata = async(e) => {
        e.preventDefault();
        await addDoc(collection(db,"userinfo"),data)
        setData({
          name:"",
          email:"",
          pwd:""
        })

      }
  return (
    
    <div>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">
        <form action="#" method='post' onSubmit={savedata} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handlechange}
              value={data.name}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handlechange}
              value={data.email}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="pwd">Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              onChange={handlechange}
              value={data.pwd}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save</button>
          </div>
        </form>

        <div className="mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">password</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {
                alldata.map((i,index)=>{
                  return (
                    <tr key={i.id || index} className="bg-white">
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{i.id}</td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{i.name}</td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{i.email}</td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">{i.pwd}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FirebaseCrud
