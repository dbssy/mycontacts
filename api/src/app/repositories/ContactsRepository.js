const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'João',
    email: 'joao@example.com',
    phone: '11949621048',
    category_id: v4(),
  }
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
