import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not found' }} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 12 }}>Page not found</Text>
        <Link href="/" style={{ color: '#3b82f6', fontWeight: '600' }}>Go home</Link>
      </View>
    </>
  );
}
