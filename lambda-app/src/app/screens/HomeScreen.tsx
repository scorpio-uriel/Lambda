import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HomeScreenProps {
  // Props will be defined later with navigation
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lambda</Text>
      <Text style={styles.subtitle}>Transform your goals into actions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default HomeScreen;