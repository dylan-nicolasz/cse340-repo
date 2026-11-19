import db from './db.js'

const getAllProjects = async() => {
    const query = `
        SELECT 
            sp.project_id, 
            sp.title, 
            sp.description, 
            sp.location, 
            sp.start_date, 
            sp.organizations_id,
            o.name AS organization_name
        FROM public.serviceProjects AS sp
        INNER JOIN public.organization AS o 
        ON sp.organizations_id = o.organization_id
    `;

    const result = await db.query(query);

    return result.rows;
};

const getProjectsByOrganizationId = async (organizationId) => {
      const query = `
        SELECT
            sp.project_id,
            sp.organizations_id AS organization_id,
            sp.title,
            sp.description,
            sp.location,
            sp.start_date AS date
        FROM public.serviceProjects AS sp
        WHERE sp.organizations_id = $1
        ORDER BY sp.start_date;
      `;
      
      const queryParams = [organizationId];
      const result = await db.query(query, queryParams);

      return result.rows;
};

const getUpcomingProjects = async (number_of_projects) => {
    const query = `
        SELECT 
            sp.project_id,
            sp.title,
            sp.description,
            sp.location,
            sp.start_date, 
            sp.organizations_id,
            o.name AS organization_name
        FROM public.serviceProjects AS sp
        INNER JOIN public.organization AS o 
        ON sp.organizations_id = o.organization_id
        WHERE sp.start_date >= CURRENT_DATE
        ORDER BY sp.start_date ASC
        LIMIT $1
    `;

    const result = await db.query(query, [number_of_projects]);
    return result.rows;
}

const getProjectDetails = async (id) => {
    const query = `
        SELECT
            sp.project_id,
            sp.title,
            sp.description,
            sp.location,
            sp.start_date,
            sp.organizations_id AS organization_id,
            o.name AS organization_name
        FROM public.serviceProjects AS sp
        INNER JOIN public.organization AS o 
        ON sp.organizations_id = o.organization_id
        WHERE sp.project_id = $1
    `;

    const result = await db.query(query, [id]);
    return result.rows[0];
}

export {getAllProjects, getProjectsByOrganizationId, getUpcomingProjects, getProjectDetails};