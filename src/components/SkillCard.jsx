import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { getTheme } from '../constants/theme';

export function SkillCard({ title, items }) {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  return (
    <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}> 
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      <View style={styles.tagsWrap}>
        {items.map((item) => (
          <View key={item} style={[styles.tag, { backgroundColor: theme.secondaryBackground, borderColor: theme.border }]}>
            <Text style={[styles.tagText, { color: theme.text }]}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '700',
  },
});
