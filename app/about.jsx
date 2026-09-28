import { Text, useColorScheme } from 'react-native';
import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { getTheme } from '../src/constants/theme';
import { profile } from '../src/data/profile';

export default function AboutScreen() {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  return (
    <ScreenShell>
      <Section title="About" subtitle="Software engineering interest rooted in practical product creation.">
        <Text style={{ color: theme.text, fontSize: 15, lineHeight: 24 }}>{profile.about}</Text>
        <Text style={{ color: theme.text, fontSize: 15, lineHeight: 24, marginTop: 16 }}>{profile.opportunity}</Text>
      </Section>

      <Section title="Core focus" subtitle="Areas of active technical growth and contribution.">
        {[
          'Backend Development',
          'Full-Stack Development',
          'Mobile Development',
          'Artificial Intelligence',
          'Machine Learning',
          'NLP',
          'LLM Applications',
        ].map((item) => (
          <Text key={item} style={{ color: theme.text, fontSize: 16, marginBottom: 8 }}>{item}</Text>
        ))}
      </Section>
    </ScreenShell>
  );
}
