import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { ProjectCard } from '../src/components/ProjectCard';
import { projects } from '../src/data/projects';

export default function ProjectsScreen() {
  return (
    <ScreenShell>
      <Section title="Projects" subtitle="Selected products and AI-powered solutions built with practical engineering goals.">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Section>
    </ScreenShell>
  );
}
