import type { SortKey, Workout } from "./types";

export const API = "https://api.abcz.workers.dev/api/fitlog";

export const SORTS: Record<SortKey, "duration" | "caloriesBurned" | "rating"> = {
  Duration: "duration",
  Calories: "caloriesBurned",
  Rating: "rating",
};

export const sortList = <T extends Workout>(list: T[], by: SortKey): T[] =>
  [...list].sort((a, b) => b[SORTS[by]] - a[SORTS[by]]);
