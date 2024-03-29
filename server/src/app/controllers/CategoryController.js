const CategoriesRepository = require('../repositories/CategoriesRepository');

const isValidUUID = require('../utils/isValidUUID');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);
    return response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid Category ID' });
    }

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });
    return response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid Category ID' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    const category = await CategoriesRepository.update(id, { name });
    return response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid Category ID' });
    }

    await CategoriesRepository.delete(id);
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
