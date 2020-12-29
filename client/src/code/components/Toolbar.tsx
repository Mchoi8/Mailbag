// React imports.
import React from "react";

// Material-UI imports.
import Button from "@material-ui/core/Button";
import ContactImg from "@material-ui/icons/ContactPhone";
import MsgImg from "@material-ui/icons/MailOutline";
import Home from "@material-ui/icons/Home";

/**
 * Toolbar.
 */
const Toolbar = ({ state }) => (

  <div>
    <Button variant="contained" size="small" style={{ marginRight:10, backgroundColor:"#008080", color:"white", fontFamily:"Ubuntu" }}
      onClick={ () => state.goHome("welcome") } >
      <Home/>
    </Button>
    <Button variant="contained" size="small" style={{ marginRight:10, fontSize:"10px", backgroundColor:"#008080", color:"white", fontFamily:"Ubuntu" }}
      onClick={ () => state.showComposeMessage("new") } >
      <MsgImg style={{ marginRight:10, fontSize:"small" }} />New Message
    </Button>
    <Button variant="contained" size="small" style={{ marginRight:10, fontSize:"10px", backgroundColor:"#008080", color:"white", fontFamily:"Ubuntu" }}
      onClick={ state.showAddContact } >
      <ContactImg style={{ marginRight:10, fontSize:"small" }} />New Contact
    </Button>

    <Button variant="outlined" color="primary" size="small" style={{ marginRight:10, fontSize:"10px", fontFamily:"Ubuntu"}}
      onClick={ state.contactToggle } >
      Show/Hide Contact
    </Button>
    <Button variant="outlined" color="primary" size="small" style={{ marginRight:10, fontSize:"10px", fontFamily:"Ubuntu" }}
      onClick={ state.mailboxToggle } >
      Show/Hide Mailbox
    </Button>
  </div>

);


export default Toolbar;
