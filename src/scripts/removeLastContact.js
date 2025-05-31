import { getAllContacts } from './getAllContacts.js';
import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
export const removeLastContact = async () => {
  try {
    const contacts = await getAllContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
      console.log('Success!');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.log('Something went wrong, try again...');
    console.log(error);
  }
};

removeLastContact();
