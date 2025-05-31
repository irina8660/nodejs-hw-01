import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const response = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(response);
  } catch (error) {
    console.log('Something wrong? try again...');
    console.log(error);
    return [];
  }
};
