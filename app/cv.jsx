import { Share, Text, View, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { Button } from '../src/components/Button';
import { getTheme } from '../src/constants/theme';
import { profile } from '../src/data/profile';
import { skills } from '../src/data/skills';
import { experience } from '../src/data/experience';
import { projects } from '../src/data/projects';
import { education } from '../src/data/education';
import { achievements } from '../src/data/achievements';

export default function CVScreen() {
  const router = useRouter();
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  const shareCV = () => {
    const text = [
      profile.name,
      profile.role,
      profile.about,
      `Location: ${profile.location}`,
      `University: ${education.school}`,
      'Core skills: ' + skills.flatMap((group) => group.items).join(', '),
      'Recent experience: ' + experience.map((item) => item.role).join(', '),
      'Projects: ' + projects.map((item) => item.name).join(', '),
      'Achievements: ' + achievements.map((item) => item.title).join(', '),
    ].join('\n');

    Share.share({ title: 'Mebrie Awoke CV', message: text });
  };

  return (
    <ScreenShell>
      <Section title="Profile" subtitle="Professional summary.">
        <Text style={{ color: theme.text, fontSize: 18, fontWeight: '800' }}>{profile.name}</Text>
        <Text style={{ color: theme.muted, fontSize: 15, marginTop: 6 }}>{profile.role}</Text>
        <Text style={{ color: theme.text, fontSize: 15, lineHeight: 24, marginTop: 12 }}>{profile.headline}</Text>
      </Section>

      <Section title="Technical Skills">
        {skills.map((group) => (
          <View key={group.title} style={{ marginBottom: 12 }}>
            <Text style={{ color: theme.text, fontSize: 16, fontWeight: '800', marginBottom: 6 }}>{group.title}</Text>
            <Text style={{ color: theme.muted, fontSize: 14 }}>{group.items.join(', ')}</Text>
          </View>
        ))}
      </Section>

      <Section title="Experience">
        {experience.map((item) => (
          <View key={`${item.role}-${item.company}`} style={{ marginBottom: 14 }}>
            <Text style={{ color: theme.text, fontSize: 17, fontWeight: '800' }}>{item.role}</Text>
            <Text style={{ color: theme.accent, fontSize: 13, fontWeight: '700', marginTop: 4 }}>{item.company}</Text>
            <Text style={{ color: theme.muted, fontSize: 13, marginTop: 4 }}>{item.period}</Text>
          </View>
        ))}
      </Section>

      <Section title="Projects">
        {projects.map((project) => (
          <Text key={project.name} style={{ color: theme.text, fontSize: 15, marginBottom: 8 }}>{project.name}</Text>
        ))}
      </Section>

      <Section title="Education">
        <Text style={{ color: theme.text, fontSize: 17, fontWeight: '800' }}>{education.school}</Text>
        <Text style={{ color: theme.muted, fontSize: 15, marginTop: 6 }}>{education.degree}</Text>
      </Section>

      <Section title="Achievements">
        {achievements.map((item) => (
          <Text key={item.title} style={{ color: theme.text, fontSize: 15, marginBottom: 8 }}>{item.title}</Text>
        ))}
      </Section>

      <View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
        <Button title="Download CV" onPress={shareCV} style={{ flex: 1 }} />
        <Button title="Share CV" variant="secondary" onPress={shareCV} style={{ flex: 1 }} />
      </View>

      <Button title="Contact Me" onPress={() => router.push('/contact')} variant="secondary" />
    </ScreenShell>
  );
}
