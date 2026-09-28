import { useEffect, useState } from 'react';
import { Animated, Share, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { Button } from '../src/components/Button';
import { SocialLinks } from '../src/components/SocialLinks';
import { ProjectCard } from '../src/components/ProjectCard';
import { ExperienceCard } from '../src/components/ExperienceCard';
import { SkillCard } from '../src/components/SkillCard';
import { getTheme } from '../src/constants/theme';
import { profile } from '../src/data/profile';
import { skills } from '../src/data/skills';
import { experience } from '../src/data/experience';
import { projects } from '../src/data/projects';
import { education } from '../src/data/education';

export default function HomeScreen() {
  const router = useRouter();
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);
  const [fadeAnim] = useState(() => new Animated.Value(0));
  const [slideAnim] = useState(() => new Animated.Value(24));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  const shareCV = () => {
    const cvText = [
      'Mebrie Awoke',
      'Software Developer | AI/ML Enthusiast',
      '4th-year Information Science student at Addis Ababa University.',
      'Areas: backend development, full-stack development, mobile development, AI, ML, NLP, LLM applications.',
      'Email: mebrieawoke@gmail.com',
      'GitHub: https://github.com/Mebrie-Awoke',
      'Location: Addis Ababa, Ethiopia',
    ].join('\n');

    Share.share({ message: cvText, title: 'Mebrie Awoke CV' });
  };

  return (
    <ScreenShell>
      <Animated.View
        style={[
          styles.hero,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={[styles.eyebrow, { color: theme.accent }]}>Portfolio</Text>
        <Text style={[styles.name, { color: theme.text }]}>{profile.name}</Text>
        <Text style={[styles.role, { color: theme.muted }]}>{profile.role}</Text>
        <Text style={[styles.description, { color: theme.text }]}>{profile.headline}</Text>

        <View style={styles.actions}>
          <Button title="View My Work" onPress={() => router.push('/projects')} style={styles.primaryButton} />
          <Button title="Contact Me" variant="secondary" onPress={() => router.push('/contact')} style={styles.secondaryButton} />
        </View>

        <Button title="Download CV" onPress={shareCV} variant="secondary" style={styles.cvButton} />
        <SocialLinks />
      </Animated.View>

      <Section title="About" subtitle="A growing developer focused on useful software, AI products, and backend systems.">
        <Text style={[styles.text, { color: theme.text }]}>{profile.about}</Text>
        <Text style={[styles.text, { color: theme.text, marginTop: 12 }]}>{profile.opportunity}</Text>
      </Section>

      <Section title="Skills" subtitle="Core technologies and practical engineering capabilities.">
        {skills.slice(0, 3).map((skillGroup) => (
          <SkillCard key={skillGroup.title} title={skillGroup.title} items={skillGroup.items} />
        ))}
      </Section>

      <Section title="Experience" subtitle="Hands-on engineering work and product contribution.">
        {experience.slice(0, 2).map((item) => (
          <ExperienceCard
            key={`${item.role}-${item.company}`}
            role={item.role}
            company={item.company}
            period={item.period}
            description={item.description}
          />
        ))}
      </Section>

      <Section title="Projects" subtitle="Selected work spanning backend, AI, and product experiences.">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Section>

      <Section title="Education" subtitle="Academic background and current focus.">
        <Text style={[styles.text, { color: theme.text }]}>{education.school}</Text>
        <Text style={[styles.text, { color: theme.muted, marginTop: 6 }]}>{education.degree}</Text>
        <Text style={[styles.text, { color: theme.muted, marginTop: 6 }]}>{education.status}</Text>
      </Section>

      <Section title="Achievements" subtitle="Recognition and proof of applied technical learning.">
        {['1st Place — AI Workshop', 'Practical software development experience', 'AI/ML project development'].map((item) => (
          <View key={item} style={[styles.bulletRow, { marginBottom: 8 }]}>
            <View style={[styles.dot, { backgroundColor: theme.accent }]} />
            <Text style={[styles.text, { color: theme.text, flex: 1 }]}>{item}</Text>
          </View>
        ))}
      </Section>

      <Section title="Looking for an opportunity to build, learn, and contribute." subtitle="I am currently open to internship, trainee, and junior software development opportunities in AI/ML, backend, full-stack, and mobile development.">
        <Button title="Let's Work Together" onPress={() => router.push('/contact')} />
      </Section>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    marginBottom: 18,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  name: {
    fontSize: 34,
    letterSpacing: -1,
    fontWeight: '900',
    marginBottom: 8,
  },
  role: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 18,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  primaryButton: {
    flex: 1,
  },
  secondaryButton: {
    flex: 1,
  },
  cvButton: {
    marginBottom: 16,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },
});
