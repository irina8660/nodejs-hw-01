import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', 'utf-8');
    console.log('Success!');
    return [];
  } catch (error) {
    console.log('Something wrong? try again...');
    console.log(error);
  }
};

removeAllContacts();
