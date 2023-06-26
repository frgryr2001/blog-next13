import readingTime from 'reading-time';
import { DateTime } from 'luxon';
export const getReadingTime = (text: string) => {
  return readingTime(text).text;
};
export const getRevalidateTime = (date: string) => {
  return DateTime.fromISO(date).toRelative();
};
