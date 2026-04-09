import ProjectPageClient from '@/components/ui/Projects/project-page-client';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map(project => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id) || null;
  const otherProjects = projects.filter(p => p.id !== id);

  return (
    <ProjectPageClient
      project={project}
      otherProjects={otherProjects}
      projectId={id}
    />
  );
}
