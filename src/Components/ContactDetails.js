import React,{useContext} from 'react'
import { ContactData } from '../Context/ContactData'

const ContactDetails = ({user}) => {
    const removeContact = useContext(ContactData)
  return (
      <>
      
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
          <button type="button" className='btn btn-danger' onClick={()=>removeContact()}>Remove</button>
      </td>
      
      
      </>
  )
}

export default ContactDetails