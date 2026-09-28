import { Text, useColorScheme } from 'react-native';
import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { getTheme } from '../src/constants/theme';
import { education } from '../src/data/education';

export default function EducationScreen() {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  return (
    <ScreenShell>
      <Section title="Education" subtitle="Current academic background and learning path.">
        <Text style={{ color: theme.text, fontSize: 20, fontWeight: '800' }}>{education.school}</Text>
        <Text style={{ color: theme.muted, fontSize: 15, marginTop: 8 }}>{education.degree}</Text>
        <Text style={{ color: theme.muted, fontSize: 15, marginTop: 8 }}>Status: {education.status}</Text>
        <Text style={{ color: theme.muted, fontSize: 15, marginTop: 8 }}>Location: {education.location}</Text>
      </Section>
    </ScreenShell>
  );
}
