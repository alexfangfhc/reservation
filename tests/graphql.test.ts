import { reservationCtrl } from '../server/controllers/reservation-ctrl';

describe('reservationCtrl test', async () => {
    test('reservationCtrl query', async () => {
        const result = await reservationCtrl.Query.reservations(null, { input: { userId: 'WdD5WR8AuzYZJAh9z' } }, null);
        expect(result.length > 0);
    })
})