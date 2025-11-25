import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys
const STORAGE_KEYS = {
  USER_PROGRESS: '@lambda_user_progress',
  GOALS: '@lambda_goals',
  TASKS: '@lambda_tasks',
  SETTINGS: '@lambda_settings',
  ONBOARDING: '@lambda_onboarding',
} as const;

export class StorageService {
  /**
   * Generic method to save data to AsyncStorage
   */
  static async saveData<T>(key: string, data: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error(`Error saving data for key ${key}:`, error);
      throw error;
    }
  }

  /**
   * Generic method to load data from AsyncStorage
   */
  static async loadData<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Error loading data for key ${key}:`, error);
      return null;
    }
  }

  /**
   * Remove data for a specific key
   */
  static async removeData(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing data for key ${key}:`, error);
      throw error;
    }
  }

  /**
   * Save user progress data
   */
  static async saveUserProgress(progress: any): Promise<void> {
    return this.saveData(STORAGE_KEYS.USER_PROGRESS, progress);
  }

  /**
   * Load user progress data
   */
  static async loadUserProgress(): Promise<any> {
    return this.loadData(STORAGE_KEYS.USER_PROGRESS);
  }

  /**
   * Save goals data
   */
  static async saveGoals(goals: any[]): Promise<void> {
    return this.saveData(STORAGE_KEYS.GOALS, goals);
  }

  /**
   * Load goals data
   */
  static async loadGoals(): Promise<any[]> {
    const goals = await this.loadData<any[]>(STORAGE_KEYS.GOALS);
    return goals || [];
  }

  /**
   * Save tasks data
   */
  static async saveTasks(tasks: any[]): Promise<void> {
    return this.saveData(STORAGE_KEYS.TASKS, tasks);
  }

  /**
   * Load tasks data
   */
  static async loadTasks(): Promise<any[]> {
    const tasks = await this.loadData<any[]>(STORAGE_KEYS.TASKS);
    return tasks || [];
  }

  /**
   * Save app settings
   */
  static async saveSettings(settings: any): Promise<void> {
    return this.saveData(STORAGE_KEYS.SETTINGS, settings);
  }

  /**
   * Load app settings
   */
  static async loadSettings(): Promise<any> {
    return this.loadData(STORAGE_KEYS.SETTINGS);
  }

  /**
   * Save onboarding completion status
   */
  static async saveOnboardingStatus(completed: boolean): Promise<void> {
    return this.saveData(STORAGE_KEYS.ONBOARDING, { completed });
  }

  /**
   * Load onboarding completion status
   */
  static async loadOnboardingStatus(): Promise<boolean> {
    const data = await this.loadData<{ completed: boolean }>(STORAGE_KEYS.ONBOARDING);
    return data?.completed || false;
  }

  /**
   * Clear all app data (useful for reset/logout)
   */
  static async clearAllData(): Promise<void> {
    try {
      const keys = Object.values(STORAGE_KEYS);
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error clearing all data:', error);
      throw error;
    }
  }

  /**
   * Get storage usage info (for debugging)
   */
  static async getStorageInfo(): Promise<{ keys: string[]; totalSize: number }> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const lambdaKeys = keys.filter(key => key.startsWith('@lambda_'));
      
      let totalSize = 0;
      for (const key of lambdaKeys) {
        const value = await AsyncStorage.getItem(key);
        if (value) {
          totalSize += value.length;
        }
      }
      
      return {
        keys: lambdaKeys,
        totalSize, // Approximate size in characters
      };
    } catch (error) {
      console.error('Error getting storage info:', error);
      return { keys: [], totalSize: 0 };
    }
  }
}