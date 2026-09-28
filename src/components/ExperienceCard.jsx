import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { getTheme } from '../constants/theme';

export function ExperienceCard({ role, company, period, description }) {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  return (
    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}> 
      <View style={styles.headerRow}>
        <Text style={[styles.role, { color: theme.text }]}>{role}</Text>
        <Text style={[styles.period, { color: theme.accent }]}>{period}</Text>
      </View>
      <Text style={[styles.company, { color: theme.muted }]}>{company}</Text>
      <View style={styles.list}>
        {description.map((item) => (
          <View key={item} style={styles.bulletRow}>
            <View style={[styles.dot, { backgroundColor: theme.accent }]} />
            <Text style={[styles.item, { color: theme.text }]}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    marginBottom: 14,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 4,
  },
  role: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
  },
  period: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'right',
  },
  company: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  list: {
    gap: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginTop: 7,
  },
  item: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
});
