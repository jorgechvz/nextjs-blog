import { parseISO, format } from 'date-fns';
import { DateProps } from '../lib/types';

const Date: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default Date;