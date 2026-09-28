import { Text, View, useColorScheme } from 'react-native';
import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { getTheme } from '../src/constants/theme';
import { achievements } from '../src/data/achievements';

export default function AchievementsScreen() {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  return (
    <ScreenShell>
      <Section title="Achievements" subtitle="Recognition and milestones that reflect technical growth.">
        {achievements.map((item) => (
          <View key={item.title} style={{ borderWidth: 1, borderColor: theme.border, borderRadius: 18, padding: 16, marginBottom: 14 }}>
            <Text style={{ color: theme.text, fontSize: 20, fontWeight: '800' }}>{item.title}</Text>
            <Text style={{ color: theme.accent, fontSize: 13, fontWeight: '700', marginTop: 6 }}>{item.subtitle}</Text>
            <Text style={{ color: theme.muted, fontSize: 15, lineHeight: 22, marginTop: 10 }}>{item.description}</Text>
          </View>
        ))}
      </Section>
    </ScreenShell>
  );
}
