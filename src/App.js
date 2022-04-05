import React, { useState, Fragment } from 'react';
import './App.css';
import data from './mock-data.json';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
const App = () => {

  const [contacts, setContacts] =useState(data);
  const [addFormData, setAddFormData] = useState({
    id:'',
    name:'',
    age:'',
    school:'',
    class:'',
    division:'',
    status:''
  });

  const [editContactID, setEditContactID] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormData.id,
      name: addFormData.name,
      age: addFormData.age, 
      school: addFormData.school,
      class: addFormData.class,
      division: addFormData.division,
      status: addFormData.status     
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

    const handleEditClick = (event, contact)=> {
      event.preventDefault();
      setEditContactID(contact.id);
    };

  return (
    <div className="app-container">
      <form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>School</th>
            <th>Class</th>
            <th>Division</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
              { editContactID === contact.id ? ( 
              <EditableRow/> 
              ) : (
                 <ReadOnlyRow contact={contact} handleEditClick={handleEditClick}/> 
              ) }
            </Fragment>
            
          ))}
        </tbody>
      </table>
      </form>
      <h2>Add a Student</h2>
      <form onSubmit={handleAddFormSubmit}>
       <input 
        type="number" 
        name="id" 
        required="required"
        placeholder="Enter ID" 
        onChange={handleAddFormChange}
        />

        <input 
        type="text" 
        name="name" 
        required="required"
        placeholder="Enter a name..." 
        onChange={handleAddFormChange}
        />

        <input 
        type="number"
        name="age" 
        required="required"
        placeholder="Select Age"
        onChange={handleAddFormChange} 
        />

        <input 
        type="text" 
        name="school" 
        required="required"
        placeholder="Enter School name..."
        onChange={handleAddFormChange}
        />

        <input 
        type="number" 
        name="class" 
        required="required"
        placeholder="Select Class"
        onChange={handleAddFormChange}
        />

        <input 
        type="text" 
        name="division" 
        required="required"
        placeholder="Type Division"
        onChange={handleAddFormChange}
        />

        <input 
        type="text" 
        name="status" 
        required="required"
        placeholder="Status"
        onChange={handleAddFormChange} 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
