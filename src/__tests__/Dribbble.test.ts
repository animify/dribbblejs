import { Dribbble } from '..';
import 'jest-fetch-mock';

describe('dribbble', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('fetch project data', async () => {
        const mockData = { name: 'Stefan Mansson' };
        fetchMock.mockResponseOnce(JSON.stringify(mockData), { status: 200 });

        const dribbble = new Dribbble({ authToken: '1234' });

        expect(await dribbble.user.get()).toEqual(mockData);
    });
});
