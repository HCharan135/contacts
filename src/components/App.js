import Header from "./Header"
import AddContact from "./AddContact"
import React, {useState,useEffect} from "react";
import ContactList from "./ContactList"
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts]= useState([]);
  
  const addContactHandler = (contact)=> {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  useEffect(()=> {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) {
      setContacts(retriveContacts);
      console.log(retriveContacts);
    }
  }, []);
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className="ui container">
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
