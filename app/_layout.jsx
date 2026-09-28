import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getTheme } from '../src/constants/theme';

export default function RootLayout() {
  const isDark = useColorScheme() === 'dark';
  const theme = getTheme(isDark);

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.tabBar,
            borderTopColor: theme.border,
            borderTopWidth: 1,
            height: 74,
            paddingBottom: 10,
            paddingTop: 8,
          },
          tabBarActiveTintColor: theme.accent,
          tabBarInactiveTintColor: theme.muted,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '700',
          },
          lazy: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="skills"
          options={{
            title: 'Skills',
            tabBarIcon: ({ color, size }) => <Ionicons name="code-slash" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="experience"
          options={{
            title: 'Experience',
            tabBarIcon: ({ color, size }) => <Ionicons name="briefcase" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="projects"
          options={{
            title: 'Projects',
            tabBarIcon: ({ color, size }) => <Ionicons name="folder" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="education"
          options={{
            title: 'Education',
            tabBarIcon: ({ color, size }) => <Ionicons name="school" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="achievements"
          options={{
            title: 'Achievements',
            tabBarIcon: ({ color, size }) => <Ionicons name="trophy" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: 'Contact',
            tabBarIcon: ({ color, size }) => <Ionicons name="mail" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="cv"
          options={{
            title: 'CV',
            tabBarIcon: ({ color, size }) => <Ionicons name="document-text" size={size} color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
