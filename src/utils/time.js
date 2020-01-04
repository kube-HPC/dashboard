import moment from 'moment';

export const unixTimeToDate = unixTime => moment(unixTime).format('DD-MM-YYYY');
export const unixToDbTime = unixTime => moment(unixTime).format('YYYY-MM-DD');
export const toUnixTime = dateStr => moment(dateStr, 'YYYY-MM-DD HH:mm:ss.SSSS').valueOf();
