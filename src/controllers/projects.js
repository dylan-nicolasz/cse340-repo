import { getAllProjects } from '../models/projects.js';
import {getUpcomingProjects} from '../models/projects.js';
import {getProjectDetails} from '../models/projects.js';
import {getCategoriesByProjectId} from '../models/categories.js';

let number_of_upcoming_projects = 5;

const showProjectsPage = async (req, res) => {
    const projects = await getUpcomingProjects(number_of_upcoming_projects);

    const title = 'Upcoming Service Projects';
    res.render('projects', { title, projects});
};

const showProjectDetailsPage = async (req, res) => {
    const projectId = req.params.id;
    const projectDetails = await getProjectDetails(projectId);
    const categories = await getCategoriesByProjectId(projectId);

    const title = 'Project Details';
    res.render('project', { title, projectDetails, categories });
};

export { showProjectsPage, showProjectDetailsPage };