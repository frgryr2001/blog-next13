import readingTime from 'reading-time';
import { DateTime } from 'luxon';

export const getReadingTime = (text: string, locale: string) => {
  const minutes = readingTime(text).minutes;
  const minutesRounded = Math.floor(minutes);
  if (locale === 'en') {
    if (minutesRounded === 1) {
      return `${minutesRounded} minute read`;
    } else {
      return `${minutesRounded} minutes read`;
    }
  } else {
    return `${minutesRounded} phút đọc`;
  }
};
export const getRevalidateTime = (date: string, locale: string) => {
  return DateTime.fromISO(date).setLocale(locale).toRelative();
};
