// React imports.
import React from "react";

// Material-UI imports.
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";


/**
 * ContactView.
 */
const ContactView = ({ state }) => (

  <form>

    <TextField margin="dense" id="contactName" label="Name" value={ state.contactName } variant="outlined"
      InputProps={{ style : { color : "#000000" } }}  style={{ width:260 }}
      onChange={ state.fieldChangeHandler } />
    <br />
    <TextField margin="dense" id="contactNumber" label="Number" value={ state.contactNumber } variant="outlined"
      InputProps={{ style : { color:"#000000" } }} style={{ width:520 }}
      onChange={ state.fieldChangeHandler } />
    <br />
    { /* Hide.show buttons as appropriate.  Note that we have to use this form of onClick() otherwise the event  */ }
    { /* object would be passed to addContact() and the branching logic would fail. */ }
    { state.currentView === "contactAdd" &&
      <Button variant="contained" size="small" style={{ marginTop:10, backgroundColor:"#008080", color:"white", fontFamily:"Ubuntu" }}
        onClick={ state.saveContact }>
        Save
      </Button>
    }
    { state.currentView === "contact" &&
      <Button variant="contained" size="small" style={{ marginTop:10, marginRight:10, backgroundColor:"#008080", color:"white", fontFamily:"Ubuntu" }}
        onClick={ state.deleteContact }>
        Delete
      </Button>
    }
    { state.currentView === "contact" &&
      <Button variant="contained" size="small" style={{ marginTop:10, backgroundColor:"#008080", color:"white", fontFamily:"Ubuntu" }}
      onClick={ state.updateContact }>Update</Button>
    }

  </form>

); /* ContactView. */


export default ContactView;
