import React, { useEffect, useState } from 'react';
import ProjectCard from './project_card';

interface Project {
  project_number: number;
  string_number: string;
  name: string;
  description: string;
  link: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('https://iyvjf8dd53.execute-api.us-east-1.amazonaws.com', {

          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });
        console.log("Fetched data:", res);

        const data = await res.json();
        setProjects(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard
        string_number={project.string_number}
          project_number={project.project_number}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
