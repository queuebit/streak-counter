// Used when storing in localStorage
export const KEY = "streak";

export interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export function buildStreak(
  date: Date,
  overrideDefaults?: Partial<Streak>
): Streak {
  const defaultStreak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  };

  return {
    ...defaultStreak,
    ...overrideDefaults,
  };
}

export function differenceInDays(dateLeft: Date, dateRight: Date): number {
  const MILLISEC_IN_DAY = 1000 * 60 * 60 * 24;
  const difftime = Math.abs(dateLeft.getTime() - dateRight.getTime());
  const differenceInDays = Math.ceil(difftime / MILLISEC_IN_DAY);

  return differenceInDays;
}

export function formattedDate(date: Date): string {
  // returns date as 11/11/2021
  // other times it returns 11/11/2021, 12:00:00 AM
  // which is why we call the .split at the end
  return date.toLocaleDateString("en-US");
}

export function updateStreak(storage: Storage, streak: Streak): void {
  storage.setItem(KEY, JSON.stringify(streak));
}
