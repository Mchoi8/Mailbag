// React imports.
import React from "react";


import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const MessageList = ({ state }) => (

  <Table stickyHeader padding="none">
    <TableHead>
      <TableRow>
        <TableCell style={{ width:120, fontWeight:'bold', border:"1px solid grey" , fontFamily:"Ubuntu" }}>Date</TableCell>
        <TableCell style={{ width:300, fontWeight:'bold', border:"1px solid grey" , fontFamily:"Ubuntu" }}>From</TableCell>
        <TableCell style={{fontWeight:'bold', border:"1px solid grey", fontFamily:"Ubuntu" }}>Subject</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      { state.messages.map(msg => (
        <TableRow key={ msg.id } style={{cursor:'pointer'}} onClick={ () => state.showMessage(msg) }>

          <TableCell style={{fontFamily:"Ubuntu"}}>{ new Date(msg.date).toLocaleDateString() }</TableCell>
          <TableCell style={{fontFamily:"Ubuntu"}}>{ msg.from }</TableCell>
          <TableCell style={{fontFamily:"Ubuntu"}}>{ msg.subject }</TableCell>
        </TableRow>
      ) ) }
    </TableBody>
  </Table>

); /* Mailboxes. */


export default MessageList;
