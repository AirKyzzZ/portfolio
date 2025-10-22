import ProjectPageClient from '@/components/ui/Projects/project-page-client';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map(project => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id) || null;
  const otherProjects = projects.filter(p => p.id !== params.id);
  
  return (
    <ProjectPageClient 
      project={project} 
      otherProjects={otherProjects}
      projectId={params.id}
    />
  );
}