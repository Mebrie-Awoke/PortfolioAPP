import { SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { getTheme } from '../constants/theme';

export function ScreenShell({ children, contentStyle, showsVerticalScrollIndicator = false }) {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView
        contentContainerStyle={[styles.content, contentStyle]}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 96,
  },
});
