
const getProjects = async () => {
    const backendURL = "https://backend-27r35r3dba-uc.a.run.app";
    const res = await fetch(backendURL + "/api/projects");

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    return res.json();
}

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div>
            {projects.map((project) => {
                return (
                    <div key={project.title}>
                        <h1>{project.title}</h1>
                        <h3>{project.location}</h3>
                        <h3>{project.start_date} - {project.end_date}</h3>
                        <p>{project.description}</p>
                    </div>
                )
            })}
        </div>
    );
}