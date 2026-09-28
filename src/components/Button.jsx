import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import { getTheme } from '../constants/theme';

export function Button({ title, onPress, variant = 'primary', disabled = false, style }) {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: isPrimary ? theme.accent : 'transparent',
          borderColor: theme.border,
          opacity: disabled ? 0.6 : 1,
        },
        !isPrimary && styles.secondary,
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: isPrimary ? theme.background : theme.text,
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
  },
  secondary: {
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
  },
});
