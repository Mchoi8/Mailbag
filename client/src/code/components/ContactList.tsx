// React imports.
import React from "react";

// Material-UI imports.
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

/**
 * Contacts.
 */
const ContactList = ({ state }) => (

  <List>
    <h3 style={{fontWeight:"bold", color:'#4682B4', margin:'10px'}} >Contacts</h3>
    {state.contacts.map(value => {
      return (
        <ListItem key={ value } button onClick={ () => state.showContact(value._id, value.name, value.phoneNumber) }>
          <ListItemAvatar>
            <PermContactCalendarIcon/>
          </ListItemAvatar>
          <ListItemText primary={ `${value.name}` } style={{fontFamily:"Ubuntu"}} />
        </ListItem>
      );
    })}

  </List>

); /* End Contacts. */


export default ContactList;
