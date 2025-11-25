import { z } from 'zod';

// Goal validation schema
export const goalSchema = z.object({
  title: z
    .string()
    .min(1, 'Goal title is required')
    .max(100, 'Goal title must be less than 100 characters'),
  description: z
    .string()
    .max(500, 'Description must be less than 500 characters')
    .optional(),
  category: z
    .string()
    .min(1, 'Category is required'),
  deadline: z
    .date()
    .optional(),
});

// Task validation schema
export const taskSchema = z.object({
  title: z
    .string()
    .min(1, 'Task title is required')
    .max(200, 'Task title must be less than 200 characters'),
  description: z
    .string()
    .max(300, 'Description must be less than 300 characters')
    .optional(),
  goalId: z
    .string()
    .min(1, 'Goal ID is required'),
  xpValue: z
    .number()
    .int()
    .min(1, 'XP value must be at least 1')
    .max(100, 'XP value cannot exceed 100'),
});

// User profile validation schema
export const userProfileSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional(),
  avatar: z
    .string()
    .url('Please enter a valid URL')
    .optional(),
});

// Settings validation schema
export const settingsSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']),
  notificationsEnabled: z.boolean(),
  dailyReminderTime: z
    .string()
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter time in HH:MM format')
    .optional(),
  weeklyGoal: z
    .number()
    .int()
    .min(1, 'Weekly goal must be at least 1')
    .max(50, 'Weekly goal cannot exceed 50')
    .optional(),
});

// Export types inferred from schemas
export type GoalInput = z.infer<typeof goalSchema>;
export type TaskInput = z.infer<typeof taskSchema>;
export type UserProfileInput = z.infer<typeof userProfileSchema>;
export type SettingsInput = z.infer<typeof settingsSchema>;

// Validation helper functions
export class ValidationUtils {
  /**
   * Validate goal data
   */
  static validateGoal(data: unknown): GoalInput {
    return goalSchema.parse(data);
  }

  /**
   * Validate goal data safely (returns errors instead of throwing)
   */
  static validateGoalSafe(data: unknown): { success: true; data: GoalInput } | { success: false; errors: string[] } {
    const result = goalSchema.safeParse(data);
    if (result.success) {
      return { success: true, data: result.data };
    } else {
      return {
        success: false,
        errors: result.error.errors.map(err => err.message),
      };
    }
  }

  /**
   * Validate task data
   */
  static validateTask(data: unknown): TaskInput {
    return taskSchema.parse(data);
  }

  /**
   * Validate task data safely
   */
  static validateTaskSafe(data: unknown): { success: true; data: TaskInput } | { success: false; errors: string[] } {
    const result = taskSchema.safeParse(data);
    if (result.success) {
      return { success: true, data: result.data };
    } else {
      return {
        success: false,
        errors: result.error.errors.map(err => err.message),
      };
    }
  }

  /**
   * Validate user profile data
   */
  static validateUserProfile(data: unknown): UserProfileInput {
    return userProfileSchema.parse(data);
  }

  /**
   * Validate user profile data safely
   */
  static validateUserProfileSafe(data: unknown): { success: true; data: UserProfileInput } | { success: false; errors: string[] } {
    const result = userProfileSchema.safeParse(data);
    if (result.success) {
      return { success: true, data: result.data };
    } else {
      return {
        success: false,
        errors: result.error.errors.map(err => err.message),
      };
    }
  }

  /**
   * Validate settings data
   */
  static validateSettings(data: unknown): SettingsInput {
    return settingsSchema.parse(data);
  }

  /**
   * Validate settings data safely
   */
  static validateSettingsSafe(data: unknown): { success: true; data: SettingsInput } | { success: false; errors: string[] } {
    const result = settingsSchema.safeParse(data);
    if (result.success) {
      return { success: true, data: result.data };
    } else {
      return {
        success: false,
        errors: result.error.errors.map(err => err.message),
      };
    }
  }
}