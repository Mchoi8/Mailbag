// Node imports.
import * as path from "path";


// Library imports.
const Datastore = require("nedb");


// Define interface to describe a contact.  Note that we'll only have an _id field when retrieving or adding, so
// it has to be optional.
export interface IContact {
  _id?: number,
  name: string,
  phoneNumber: number
}


// The worker that will perform contact operations.
export class Worker {

  // The Nedb Datastore instance for contacts.
  private db: Nedb;

  constructor() {

    this.db = new Datastore({
      filename : path.join(__dirname, "contacts.db"),
      autoload : true
    });

  } /* End constructor. */


  /**
   * Lists all contacts.
   */
  public listContacts(): Promise<IContact[]> {
    return new Promise((res, rej) => {
      this.db.find(
        {},
        (err: Error, docs: IContact[]) => {
          if (err) {
            rej(err);
          } else {
            res(docs);
          }
        }
      );
    });

  }


  /**
   * Add a new contact.
   */
  public addContact(contactInfo: IContact): Promise<IContact> {
    
    return new Promise((res, rej) => {
      this.db.insert( contactInfo,
        (err: Error, newDoc: IContact) => {
          if (err) {
            rej(err);
          } else {
            res(newDoc);
          }
        }
      );
    });

  } 



    /**
   * Update an existing contact.
   */
  public updateContact(contactInfo: IContact): Promise<IContact> {
    
    return new Promise((res, rej) => {
      this.db.update( {name: contactInfo.name}, contactInfo,{}, 
        (err: Error, remnum: number) => {
          if (err) {
            rej(err);
          } else {
            res();
          }
        });

    }); 
  }



  /**
   * Delete a contact.
   */
  public deleteContact(id: string): Promise<string> {
    return new Promise((res, rej) => {
      this.db.remove(
        { _id : id },
        { },
        (err: Error, remnum: number) => {
          if (err) {
            rej(err);
          } else {
            res();
          }
        }
      );
    });

  } 


}
