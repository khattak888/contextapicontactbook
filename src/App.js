import "bootswatch/dist/materia/bootstrap.min.css"; 
import Navbar from "./Components/Navbar";
import ContactDataProvider from "./Context/ContactData";
import Contacts from "./Components/Contacts";
import ContactForm from "./Components/ContactForm";
function App() {
  return (
    <div>
      <h1>context api contact book</h1>
      <Navbar />
      <div className="container mt-5">
      <ContactDataProvider>
      <ContactForm />
      <Contacts />
     
      </ContactDataProvider>
      </div>
    </div>
  );
}

export default App;
