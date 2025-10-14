// ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  project_number: number;
  string_number: string;
  name: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({string_number, name, description, link}) => {
  return (
    <div className="project-card">
      <p className='playfair'>no. {string_number} - {name}</p>
      <p>{description}</p>
      <p>{link}</p> <br /> <br />
    </div>
  );
};

export default ProjectCard;
