import { Pressable, StyleSheet, View, Text, Linking, useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getTheme } from '../constants/theme';
import { contactConfig } from '../constants/config';

const items = [
  {
    label: 'GitHub',
    url: contactConfig.github,
    icon: 'logo-github',
  },
  {
    label: 'LinkedIn',
    url: contactConfig.linkedin,
    icon: 'logo-linkedin',
  },
  {
    label: 'Email',
    url: `mailto:${contactConfig.email}`,
    icon: 'mail',
  },
];

export function SocialLinks() {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  const openLink = async (url) => {
    try {
      if (url) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.warn('Unable to open link', error);
    }
  };

  return (
    <View style={styles.row}>
      {items.map((item) => (
        <Pressable
          key={item.label}
          accessibilityRole="link"
          onPress={() => openLink(item.url)}
          style={[styles.link, { backgroundColor: theme.card, borderColor: theme.border }]}
        >
          <Ionicons name={item.icon} size={18} color={theme.accent} />
          <Text style={[styles.label, { color: theme.text }]}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 8,
  },
});
