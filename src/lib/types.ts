export type Workout = {
  id: number | string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string | number;
  rating: number;
  description: string;
  instructions: string[];
  done?: boolean;
};

export type SortKey = "Duration" | "Calories" | "Rating";
export type Tab = "plan" | "saved";
