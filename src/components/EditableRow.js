import React from 'react'

const EditableRow = () => {
  return (
    <tr>
        <td>
        <input 
        type="number" 
        name="id" 
        required="required"
        placeholder="Enter ID" 
        />
        </td>
        <td>
        <input 
        type="text" 
        name="name" 
        required="required"
        placeholder="Enter a name..." 
        />   
        </td>
        <td>
        <input 
        type="number"
        name="age" 
        required="required"
        placeholder="Select Age"
        />
        </td>
        <td>
        <input 
        type="text" 
        name="school" 
        required="required"
        placeholder="Enter School name..."
        />
        </td>
        <td>
        <input 
        type="number" 
        name="class" 
        required="required"
        placeholder="Select Class"
        />
        </td>
        <td>
        <input 
        type="text" 
        name="division" 
        required="required"
        placeholder="Type Division"
        />
        </td>
        <td>
        <input 
        type="text" 
        name="status" 
        required="required"
        placeholder="Status"
        />
        </td>
    </tr>
  )
}

export default EditableRow