import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

// Types for the store
interface Goal {
  id: string;
  title: string;
  description?: string;
  category: string;
  deadline?: Date;
  createdAt: Date;
  completed: boolean;
  tasks: Task[];
}

interface Task {
  id: string;
  goalId: string;
  title: string;
  description?: string;
  completed: boolean;
  xpValue: number;
  createdAt: Date;
  completedAt?: Date;
}

interface UserProgress {
  totalXP: number;
  level: number;
  streak: number;
  tasksCompleted: number;
  goalsCompleted: number;
}

interface AppState {
  // User data
  userProgress: UserProgress;
  goals: Goal[];
  tasks: Task[];
  
  // UI state
  isOnboardingCompleted: boolean;
  currentTheme: 'light' | 'dark' | 'system';
  notificationsEnabled: boolean;
  
  // Actions
  addGoal: (goal: Omit<Goal, 'id' | 'createdAt' | 'tasks'>) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  completeTask: (id: string) => void;
  updateUserProgress: (progress: Partial<UserProgress>) => void;
  setOnboardingCompleted: (completed: boolean) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setNotificationsEnabled: (enabled: boolean) => void;
}

export const useAppStore = create<AppState>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    userProgress: {
      totalXP: 0,
      level: 1,
      streak: 0,
      tasksCompleted: 0,
      goalsCompleted: 0,
    },
    goals: [],
    tasks: [],
    isOnboardingCompleted: false,
    currentTheme: 'system',
    notificationsEnabled: true,

    // Actions
    addGoal: (goalData) => {
      const newGoal: Goal = {
        id: Date.now().toString(),
        createdAt: new Date(),
        completed: false,
        tasks: [],
        ...goalData,
      };
      set((state) => ({ goals: [...state.goals, newGoal] }));
    },

    updateGoal: (id, updates) => {
      set((state) => ({
        goals: state.goals.map((goal) =>
          goal.id === id ? { ...goal, ...updates } : goal
        ),
      }));
    },

    deleteGoal: (id) => {
      set((state) => ({
        goals: state.goals.filter((goal) => goal.id !== id),
        tasks: state.tasks.filter((task) => task.goalId !== id),
      }));
    },

    addTask: (taskData) => {
      const newTask: Task = {
        id: Date.now().toString(),
        createdAt: new Date(),
        completed: false,
        xpValue: 10, // Default XP value
        ...taskData,
      };
      set((state) => ({ tasks: [...state.tasks, newTask] }));
    },

    updateTask: (id, updates) => {
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, ...updates } : task
        ),
      }));
    },

    completeTask: (id) => {
      const state = get();
      const task = state.tasks.find((t) => t.id === id);
      if (!task || task.completed) return;

      // Update task as completed
      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === id 
            ? { ...t, completed: true, completedAt: new Date() } 
            : t
        ),
      }));

      // Update user progress
      const newXP = state.userProgress.totalXP + task.xpValue;
      const newLevel = Math.floor(newXP / 100) + 1; // Simple level calculation
      
      set((state) => ({
        userProgress: {
          ...state.userProgress,
          totalXP: newXP,
          level: newLevel,
          tasksCompleted: state.userProgress.tasksCompleted + 1,
        },
      }));
    },

    updateUserProgress: (progress) => {
      set((state) => ({
        userProgress: { ...state.userProgress, ...progress },
      }));
    },

    setOnboardingCompleted: (completed) => {
      set({ isOnboardingCompleted: completed });
    },

    setTheme: (theme) => {
      set({ currentTheme: theme });
    },

    setNotificationsEnabled: (enabled) => {
      set({ notificationsEnabled: enabled });
    },
  }))
);