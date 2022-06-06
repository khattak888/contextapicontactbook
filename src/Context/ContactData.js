import React,{useState,createContext} from "react";
export const ContactData = createContext();

const ContactDataProvider = (props) =>{
    const [contacts , setContacts] = useState([
        {id:1 , name:'bilal',email:'bilal@gmail.com',phone:'0343-9281-387'},
        {id:2 , name:'usama',email:'usama@gmail.com',phone:'0343-9001-387'},
        {id:3 , name:'huzaifa',email:'huzaifa@gmail.com',phone:'0343-9991-387'},
        {id:4 , name:'arslan',email:'arsalan@gmail.com',phone:'0343-9981-387'},
    ])
    const addContact  = contact =>{
        setContacts([...contacts, contacts]);
    }
    const removeContact   = (id) =>{
        const filtered = contacts.filter(contact=>contact.id !==id)
        setContacts(filtered)
    }
    return(
        <ContactData.Provider value={{users: contacts, addContact,removeContact}}>
            {props.children}

        </ContactData.Provider>
    )
}
export default ContactDataProvider