import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contactsArr = await readContacts();
    for (let i = 0; i < number; i++) {
      contactsArr.push(createFakeContact());
    }
    await writeContacts(contactsArr);
  } catch (error) {
    console.log('Something wrong? try again...');
    console.log(error);
  }
};

generateContacts(3);
