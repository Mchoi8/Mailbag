// React imports.
import React from "react";

// Material-UI imports.
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";


/**
 * Mailboxes.
 */
const MailboxList = ({ state }) => (

  <List>
    <h3 style={{fontWeight:"bold", color:'#2E8B57', margin:'10px'}} >Mailbox List</h3>
    { state.mailboxes.map(value => {
      return (
        <Chip label={ `${value.name}` } variant="outlined" onClick={ () => state.setCurrentMailbox(value.path) }
          style={{ width:100, marginBottom:5, backgroundColor:"#8FBC8F", fontFamily:"Ubuntu" }}
    />
      );
     } ) }
  </List>

);


export default MailboxList;
