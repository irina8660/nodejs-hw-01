import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const result = await fs.readFile(PATH_DB);
    return JSON.parse(result.toString('utf-8'));
  } catch (error) {
    console.log('Something wrong? try again...');
      console.log(error);
      return [];
  }
};

console.log(await getAllContacts());
