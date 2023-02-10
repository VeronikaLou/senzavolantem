import { format } from 'date-fns';

export const getLastDayOfMonthDate = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 1);

export const getFirstDayOfMonthDate = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 1);

export const formatDate = (date?: string | Date) =>
  date ? format(new Date(date), 'dd.MM.yyyy') : '';
