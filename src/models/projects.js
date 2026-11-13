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
}

export {getAllProjects} 