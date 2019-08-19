DROP TABLE PARAMETERS;
DROP TABLE WORK_DONE;
DROP TABLE USERS_ROLES;
DROP TABLE TASKS_DEPENDENCIES;
DROP TABLE RESOURCES;
DROP TABLE TASKS;
DROP TABLE ENTRIES;
DROP TABLE NOTES;
DROP TABLE TAGS;
DROP TABLE PROJECTS;
DROP TABLE ROLES;
DROP TABLE USERS;

CREATE TABLE PARAMETERS (
	id serial NOT NULL,
	key varchar NOT NULL,
	value varchar NOT NULL,
	CONSTRAINT parameters_pk PRIMARY KEY (id)
);

CREATE TABLE PROJECTS (
	id serial NOT NULL,
	name varchar NOT NULL,
	description varchar NOT NULL,
	CONSTRAINT projects_pk PRIMARY KEY (id)
);

CREATE TABLE USERS (
	id serial NOT NULL,
	name varchar NOT NULL,
	password varchar NOT NULL,
	description varchar NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id),
	CONSTRAINT users_un UNIQUE (name)
);

CREATE TABLE ROLES (
	id serial NOT NULL,
	name varchar NOT NULL,
	description varchar NOT NULL,
	CONSTRAINT roles_check CHECK ((((name)::text = 'ADMIN'::text) OR ((name)::text = 'PM'::text) OR ((name)::text = 'RESOURCE'::text))),
	CONSTRAINT roles_pk PRIMARY KEY (id),
	CONSTRAINT roles_un UNIQUE (description)
);

CREATE TABLE ENTRIES (
	id serial NOT NULL,
	checkin_date date NOT NULL,
	checkout_date varchar NULL,
	user_id serial NOT NULL,
	CONSTRAINT entries_pk PRIMARY KEY (id),
	CONSTRAINT entries_fk FOREIGN KEY (user_id) REFERENCES USERS(id)
);

CREATE TABLE NOTES (
	id serial NOT NULL,
	type varchar NOT NULL,
	header varchar NOT NULL,
	body varchar NOT NULL,
	attachments bytea NULL,
	project_id serial NOT NULL,
	CONSTRAINT notes_check CHECK ((((type)::text = 'RN'::text) OR ((type)::text = 'RC'::text))),
	CONSTRAINT notes_pk PRIMARY KEY (id),
	CONSTRAINT notes_fk FOREIGN KEY (project_id) REFERENCES PROJECTS(id)
);

CREATE TABLE RESOURCES (
	id serial NOT NULL,
	user_id serial NOT NULL,
	project_id serial NOT NULL,
	CONSTRAINT resources_types_pk PRIMARY KEY (id),
	CONSTRAINT resources_fk_projects FOREIGN KEY (project_id) REFERENCES PROJECTS(id),
	CONSTRAINT resources_fk_users FOREIGN KEY (user_id) REFERENCES USERS(id)
);

CREATE TABLE TAGS (
	id serial NOT NULL,
	name varchar NOT NULL,
	description varchar NOT NULL,
	project_id serial NOT NULL,
	CONSTRAINT tags_pk PRIMARY KEY (id),
	CONSTRAINT tags_fk FOREIGN KEY (project_id) REFERENCES PROJECTS(id)
);

CREATE TABLE TASKS (
	id serial NOT NULL,
	start_date date NOT NULL,
	due_date date NOT NULL,
	estimated_hours numeric(4,2) NOT NULL,
	computed_hours numeric(4,2) NOT NULL,
	tag_id serial NOT NULL,
	CONSTRAINT task_pk PRIMARY KEY (id),
	CONSTRAINT tasks_fk FOREIGN KEY (tag_id) REFERENCES TAGS(id)
);

CREATE TABLE TASKS_DEPENDENCIES (
	id serial NOT NULL,
	from_task_id serial NOT NULL,
	to_task_id serial NOT NULL,
	CONSTRAINT tasks_dependencies_pk PRIMARY KEY (id),
	CONSTRAINT tasks_dependencies_fk_from FOREIGN KEY (from_task_id) REFERENCES TASKS(id),
	CONSTRAINT tasks_dependencies_fk_to FOREIGN KEY (to_task_id) REFERENCES TASKS(id)
);

CREATE TABLE USERS_ROLES (
	id serial NOT NULL,
	user_id serial NOT NULL,
	role_id serial NOT NULL,
	CONSTRAINT users_roles_pk PRIMARY KEY (id),
	CONSTRAINT users_roles_fk_role FOREIGN KEY (role_id) REFERENCES ROLES(id),
	CONSTRAINT users_roles_fk_usr FOREIGN KEY (user_id) REFERENCES USERS(id)
);

CREATE TABLE WORK_DONE (
	id serial NOT NULL,
	task_id serial NOT NULL,
	resource_id serial NOT NULL,
	start_date date NOT NULL,
	computed_hours varchar(2) NOT NULL,
	CONSTRAINT work_done_pk PRIMARY KEY (id),
	CONSTRAINT work_done_fk_resource FOREIGN KEY (resource_id) REFERENCES USERS(id),
	CONSTRAINT work_done_fk_task FOREIGN KEY (task_id) REFERENCES TASKS(id)
);
