import { View } from 'react-native';
import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { SkillCard } from '../src/components/SkillCard';
import { skills } from '../src/data/skills';

export default function SkillsScreen() {
  return (
    <ScreenShell>
      <Section title="Skills" subtitle="Technology strengths across product, backend, AI, and delivery.">
        <View>
          {skills.map((skillGroup) => (
            <SkillCard key={skillGroup.title} title={skillGroup.title} items={skillGroup.items} />
          ))}
        </View>
      </Section>
    </ScreenShell>
  );
}
