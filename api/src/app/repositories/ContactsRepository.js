const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'João',
    email: 'joao@example.com',
    phone: '11949621048',
    category_id: uuid(),
  }
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
