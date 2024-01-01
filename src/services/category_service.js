class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async createCategory(category) {
    try {
      await this.categoryRepository.create;
    } catch (error) {}
  }
}
