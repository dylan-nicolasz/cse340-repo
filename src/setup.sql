CREATE TABLE organization (
	organization_id SERIAL PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	description TEXT NOT NULL,
	contact_email VARCHAR(255) NOT NULL,
	logo_filename VARCHAR (255) NOT NULL
)

INSERT INTO organization (name, description, contact_email, logo_filename) 
VALUES
    ('BrightFuture Builders', 'A nonprofit focused on improving community infrastructure through sustainable construction projects.', 'info@brightfuturebuilders.org', 'brightfuture-logo.png'),
    ('GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 'contact@greenharvest.org', 'greenharvest-logo.png'),
	('UnityServe Volunteers', ' A volunteer coordination group supporting local charities and service initiatives.', 'hello@unityserve.org', 'unityserve-logo.png');

CREATE TABLE serviceProjects (
	project_id SERIAL PRIMARY KEY,
	title VARCHAR(150) NOT NULL,
	description TEXT NOT NULL,
	location VARCHAR (200) NOT NULL,
	start_date DATE NOT NULL,
	organizations_id INTEGER NOT NULL,
	
	FOREIGN KEY (organizations_id) REFERENCES organization (organization_id)
);	

INSERT INTO serviceProjects (title, description, location, start_date, organizations_id)
VALUES 
--BrightFuture Builders (id:1)
 ('Community School Renovation',
 'Renovating classrooms and improving school facilities for children in underserved communities.',
 'Quito, Ecuador', '2026-11-15', 1),

 ('Safe Housing Initiative',
 'Building affordable and safe housing for low-income families.',
 'Guayaquil, Ecuador', '2026-11-20', 1),

('Community Park Construction',
 'Creating public parks and recreational spaces for families and children.',
 'Cuenca, Ecuador', '2026-11-25', 1),

('Clean Water Infrastructure',
 'Installing sustainable water systems to improve access to clean drinking water.',
 'Loja, Ecuador', '2026-12-01', 1),

('Accessible Community Centers',
 'Constructing accessible community centers for educational and social activities.',
 'Ambato, Ecuador', '2026-12-05', 1),

-- GreenHarvest Growers (ID: 2)
('Urban Community Garden',
 'Creating community gardens where residents can grow fresh fruits and vegetables.',
 'Quito, Ecuador', '2026-11-16', 2),

('School Gardening Program',
 'Teaching students how to grow food and understand sustainable agriculture.',
 'Guayaquil, Ecuador', '2026-11-22', 2),

('Neighborhood Composting Project',
 'Promoting composting practices to reduce household organic waste.',
 'Cuenca, Ecuador', '2026-11-28', 2),

('Fresh Food Distribution',
 'Growing and distributing fresh produce to families in need.',
 'Loja, Ecuador', '2026-12-03', 2),

('Urban Farming Workshops',
 'Organizing workshops to teach residents about sustainable farming techniques.',
 'Ambato, Ecuador', '2026-12-08', 2),

-- UnityServe Volunteers (ID: 3)
('Community Food Drive',
 'Collecting and distributing food donations to families experiencing financial difficulties.',
 'Quito, Ecuador', '2026-11-18', 3),

('Elderly Support Program',
 'Organizing volunteers to assist elderly residents with daily activities and companionship.',
 'Guayaquil, Ecuador', '2026-11-24', 3),

('Neighborhood Cleanup Day',
 'Coordinating volunteers to clean public spaces and promote environmental awareness.',
 'Cuenca, Ecuador', '2026-11-30', 3),

('Children''s Education Support',
 'Providing tutoring and educational resources to children from underserved communities.',
 'Loja, Ecuador', '2026-12-06', 3),

('Disaster Relief Volunteers',
 'Coordinating volunteers to provide essential supplies and support to communities affected by natural disasters.',
 'Ambato, Ecuador', '2026-12-10', 3);