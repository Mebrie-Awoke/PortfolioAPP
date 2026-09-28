import { useState } from 'react';
import { Alert, Linking, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';
import { ScreenShell } from '../src/components/ScreenShell';
import { Section } from '../src/components/Section';
import { Button } from '../src/components/Button';
import { getTheme } from '../src/constants/theme';
import { contactConfig } from '../src/constants/config';
import { validateContactForm } from '../src/utils/validation';

const defaultForm = {
  name: '',
  email: '',
  message: '',
};

export default function ContactScreen() {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const handleSubmit = async () => {
    const result = validateContactForm(form);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    try {
      await Linking.openURL(`mailto:${contactConfig.email}?subject=${subject}&body=${body}`);
    } catch (_error) {
      Alert.alert('Unable to open email client', 'Please email me directly at mebrieawoke@gmail.com.');
    }
  };

  return (
    <ScreenShell>
      <Section title="Contact" subtitle="Let’s discuss internships, junior roles, and software opportunities.">
        <TextInput
          value={form.name}
          onChangeText={(value) => handleChange('name', value)}
          placeholder="Name"
          placeholderTextColor={theme.muted}
          accessibilityLabel="Name"
          style={[styles.input, { backgroundColor: theme.surface, borderColor: errors.name ? '#ff6b6b' : theme.border, color: theme.text }]}
        />
        {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

        <TextInput
          value={form.email}
          onChangeText={(value) => handleChange('email', value)}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={theme.muted}
          accessibilityLabel="Email"
          style={[styles.input, { backgroundColor: theme.surface, borderColor: errors.email ? '#ff6b6b' : theme.border, color: theme.text }]}
        />
        {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

        <TextInput
          value={form.message}
          onChangeText={(value) => handleChange('message', value)}
          placeholder="Message"
          multiline
          numberOfLines={6}
          placeholderTextColor={theme.muted}
          accessibilityLabel="Message"
          style={[styles.textarea, { backgroundColor: theme.surface, borderColor: errors.message ? '#ff6b6b' : theme.border, color: theme.text }]}
        />
        {errors.message ? <Text style={styles.error}>{errors.message}</Text> : null}

        <Button title="Send Message" onPress={handleSubmit} />
      </Section>

      <Section title="Reach out" subtitle="Other ways to connect.">
        <View style={styles.contactRow}>
          <Text style={[styles.label, { color: theme.text }]}>Email:</Text>
          <Text style={[styles.value, { color: theme.accent }]}>{contactConfig.email}</Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={[styles.label, { color: theme.text }]}>GitHub:</Text>
          <Text style={[styles.value, { color: theme.accent }]}>{contactConfig.github}</Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={[styles.label, { color: theme.text }]}>LinkedIn:</Text>
          <Text style={[styles.value, { color: theme.accent }]}>{contactConfig.linkedin}</Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={[styles.label, { color: theme.text }]}>Location:</Text>
          <Text style={[styles.value, { color: theme.text }]}>{contactConfig.location}</Text>
        </View>
      </Section>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    minHeight: 48,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 8,
    fontSize: 15,
  },
  textarea: {
    borderWidth: 1,
    borderRadius: 12,
    minHeight: 140,
    paddingHorizontal: 14,
    paddingVertical: 12,
    textAlignVertical: 'top',
    marginBottom: 8,
    fontSize: 15,
  },
  error: {
    color: '#ff6b6b',
    fontSize: 12,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    flexShrink: 1,
  },
});
