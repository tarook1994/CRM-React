import React from 'react';
import "./Table.css"

const table = (props) => {
    let view = <h1>Loading</h1>
    if(props.data != null) {
        view = props.data.map((item,index) => (
            <tr Ahmed>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                  <button onClick = {() => props.update(index)}>Update</button>
                  <button id="delete" onClick= {()=>props.delete(item.id)}>Delete</button>
              </td>
            </tr>
          ))
    }
    return (
        <div id="customers">
        <div >
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {view}
            </tbody>
          </table>
    
        </div>
      </div>

    )
}



export default table;