import React from 'react'
import useApi from './UseApi'
// import axios from 'axios'


const Customhook = () => {
  const [post] = useApi("https://jsonplaceholder.typicode.com/posts")
  const [photo] = useApi("https://jsonplaceholder.typicode.com/photos")
  const [user] = useApi("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
      <table>
        <caption>
              User Information
        </caption>

        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((i)=>{
              return (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr />
      <table>
        <caption>
              User Information
        </caption>

        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>url</th>
           
          </tr>
        </thead>
        <tbody>
          {
            photo.map((i)=>{
              return (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>{i.url}</td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Customhook
