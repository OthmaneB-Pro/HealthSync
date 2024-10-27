import { create } from "zustand";

type Activity = {
  sport: string;
  duration: string;
};

type ActivityState = {
  activities: Activity[];
  setActivity: (activity: Activity) => void;
};

export const useActivityStore = create<ActivityState>((set) => ({
  activities: [],
  setActivity: (activity: Activity) =>
    set((state) => ({
      activities: [...state.activities, activity],
    })),
}));
