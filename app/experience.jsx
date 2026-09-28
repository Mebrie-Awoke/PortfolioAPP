import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { ExperienceCard } from '../src/components/ExperienceCard';
import { experience } from '../src/data/experience';

export default function ExperienceScreen() {
  return (
    <ScreenShell>
      <Section title="Experience" subtitle="Professional and freelance work across software engineering and product delivery.">
        {experience.map((item) => (
          <ExperienceCard
            key={`${item.role}-${item.company}`}
            role={item.role}
            company={item.company}
            period={item.period}
            description={item.description}
          />
        ))}
      </Section>
    </ScreenShell>
  );
}
