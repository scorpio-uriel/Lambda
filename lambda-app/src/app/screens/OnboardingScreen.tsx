import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OnboardingScreenProps {
  // Props will be defined later with navigation
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lambda</Text>
      <Text style={styles.description}>
        Your intelligent assistant for transforming goals into achievable actions
      </Text>
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
    fontSize: 28,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default OnboardingScreen;