import { useEffect, useState } from 'react';
import { Animated, Linking, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { getTheme } from '../constants/theme';

export function ProjectCard({ project }) {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);
  const [opacity] = useState(() => new Animated.Value(0.8));
  const [translate] = useState(() => new Animated.Value(18));
  const [scale] = useState(() => new Animated.Value(0.97));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 320, useNativeDriver: true }),
      Animated.timing(translate, { toValue: 0, duration: 360, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 360, useNativeDriver: true }),
    ]).start();
  }, [opacity, translate, scale]);

  const openLink = async (url) => {
    if (!url) return;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.warn('Unable to open project link', error);
    }
  };

  return (
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
          opacity,
          transform: [{ translateY: translate }, { scale }],
        },
      ]}
    >
      <View style={[styles.imageArea, { backgroundColor: project.accent || theme.accent }]}>
        <Text style={styles.imageLabel}>{project.name}</Text>
      </View>
      <Text style={[styles.name, { color: theme.text }]}>{project.name}</Text>
      <Text style={[styles.subtitle, { color: theme.accent }]}> {project.subtitle} </Text>
      <Text style={[styles.description, { color: theme.muted }]}>{project.description}</Text>
      <View style={styles.tagsWrap}>
        {project.technologies.map((item) => (
          <View key={item} style={[styles.tag, { backgroundColor: theme.secondaryBackground, borderColor: theme.border }]}>
            <Text style={[styles.tagText, { color: theme.text }]}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={styles.actions}>
        <Pressable
          accessibilityRole="button"
          disabled={!project.sourceLink}
          onPress={() => openLink(project.sourceLink)}
          style={[
            styles.action,
            {
              backgroundColor: project.sourceLink ? theme.accent : theme.secondaryBackground,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.actionText, { color: project.sourceLink ? theme.background : theme.muted }]}>GitHub</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          disabled={!project.demoLink}
          onPress={() => openLink(project.demoLink)}
          style={[
            styles.action,
            {
              backgroundColor: project.demoLink ? theme.surface : theme.secondaryBackground,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.actionText, { color: project.demoLink ? theme.text : theme.muted }]}>Demo</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    padding: 14,
    borderWidth: 1,
    marginBottom: 16,
  },
  imageArea: {
    height: 150,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  imageLabel: {
    fontSize: 22,
    fontWeight: '800',
    color: '#07141C',
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },
  tag: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  action: {
    flex: 1,
    minHeight: 42,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontWeight: '800',
    fontSize: 13,
  },
});
