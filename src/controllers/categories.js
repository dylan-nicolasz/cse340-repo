import { getAllCategories } from '../models/categories.js';
import { getCategoryById, getProjectsByCategoryId } from '../models/categories.js';

const showCategoriesPage = async (req, res) => {
  const categories = await getAllCategories();   
  const title = 'Project Categories';
    
  res.render('categories', { title, categories });
    
};

const showCategoriesDetailsPage = async (req, res) => {
    const categoryId = req.params.id;
    const categories = await getCategoryById(categoryId);
    const projects = await getProjectsByCategoryId(categoryId);

    const title = 'Category Details';
    res.render('category', { title, categories, projects });
};

export { showCategoriesPage, showCategoriesDetailsPage };