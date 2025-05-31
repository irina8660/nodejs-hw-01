import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const response = await getAllContacts();
    return response.length;
  } catch (error) {
    console.log('Something wrong? try again...');
    console.log(error);
    return 0;
  }
};

console.log(await countContacts());
