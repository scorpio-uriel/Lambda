import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatsScreenProps {
  // Props will be defined later with navigation
}

const StatsScreen: React.FC<StatsScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      <Text style={styles.subtitle}>Your progress overview</Text>
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
    fontSize: 24,
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

export default StatsScreen;