export function minutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const hoursText = hours > 0 ? hours + 'h ' : '';
    const minutesText = (minutes % 60).toFixed(1) + 'm';
    return hoursText + minutesText;
}
