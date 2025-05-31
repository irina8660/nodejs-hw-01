import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contactsArr = await readContacts();
    contactsArr.push(createFakeContact());
    await writeContacts(contactsArr);
  } catch (error) {
    console.log('Something wrong? try again...');
    console.log(error);
  }
};

addOneContact();
