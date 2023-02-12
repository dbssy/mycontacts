const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    return response.json(contacts);
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
