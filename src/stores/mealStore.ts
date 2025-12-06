import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CalorieResponse, MealHistoryItem } from '@/types';
import api from '@/lib/api';

interface MealState {
    currentMeal: CalorieResponse | null;
    history: MealHistoryItem[];
    loading: boolean;
    error: string | null;
    fetchCalories: (dish_name: string, servings: number) => Promise<void>;
    clearError: () => void;
    addToHistory: (meal: MealHistoryItem) => void;
    clearHistory: () => void;
}

export const useMealStore = create<MealState>()(
    persist(
        (set, get) => ({
            currentMeal: null,
            history: [],
            loading: false,
            error: null,

            fetchCalories: async (dish_name: string, servings: number) => {
                set({ loading: true, error: null });
                try {
                    const response = await api.post('/get-calories', { dish_name, servings });
                    const mealData: CalorieResponse = response.data;

                    set({ currentMeal: mealData });

                    // Add to history
                    get().addToHistory({
                        ...mealData,
                        id: crypto.randomUUID(),
                        timestamp: new Date().toISOString(),
                    });

                } catch (error: any) {
                    const errorMessage = error.response?.data?.detail || error.message || 'Failed to fetch calories';
                    set({ error: errorMessage });
                } finally {
                    set({ loading: false });
                }
            },

            clearError: () => set({ error: null }),

            addToHistory: (meal) => set((state) => ({
                history: [meal, ...state.history].slice(0, 50) // Keep last 50
            })),

            clearHistory: () => set({ history: [] }),
        }),
        {
            name: 'meal-storage',
            partialize: (state) => ({ history: state.history }), // Only persist history
        }
    )
);
