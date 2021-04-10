import { addMinutesToDate, getNow } from '../src/helpers/date';

test('30 minutes after 3.30 should be 4.00', () => {
  //set date time timestep of 2021.03.01. 03.30
  const date = new Date(1614601825000);
  const minutes = 30;
  const result = addMinutesToDate(date, minutes);
  const resultTime = result.getTime();
  expect(resultTime).toBe(1614603625000);
});

test('get now should return now', () => {
  const now = getNow();
  const pureNow = new Date();
  expect(now).toStrictEqual(pureNow);
});
