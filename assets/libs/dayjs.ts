import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import duration from 'dayjs/plugin/duration';

dayjs.locale('ru');
dayjs.extend(duration);

export { dayjs };
