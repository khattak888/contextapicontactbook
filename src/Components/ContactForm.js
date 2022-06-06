import React, { useContext } from "react";
import InputHook from "../hooks/inputHook";
import { ContactData } from "../Context/ContactData";


const ContactForm = () => {
   const {addContact} = useContext(ContactData)

    const [name , setName , resetName] = InputHook("")
    const [email , setEmail , resetEmail] = InputHook("")
    const [phone , setPhone ,resetPhone ] = InputHook("")

    const addNewContact = (e)=>{
        e.preventDefault()
        addContact({name:name,email:email,phone:phone});
        resetName()
        resetEmail()
        resetPhone()
    }
  return (
    <form onSubmit={addNewContact}>
      <div className="form-group">
        <h2>Add Contacts</h2>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Name"
          value={name}
          onChange={setName}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter Email"
          value={email}
          onChange={setEmail}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phone"
          className="form-control"
          placeholder="Enter Phone" 
          value={phone}
          onChange={setPhone}
        />
      </div>
      <div className="form-group">
        <input type="submit" className="btn btn-info btn-block" />
      </div>
    </form>
  );
};

export default ContactForm;
