import React from 'react'

const ReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <tr>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.age}</td>
            <td>{contact.school}</td>
            <td>{contact.class}</td>
            <td>{contact.division}</td>
            <td>{contact.status}</td>
            <td>
                <button type="button" onClick={(event)=> handleEditClick(event, contact)}>Edit</button>
            </td>
          </tr>
  )
}

export default ReadOnlyRow