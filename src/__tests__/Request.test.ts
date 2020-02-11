import Request from '../Request';
import 'jest-fetch-mock';

describe('Request', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('builds and fetches from url', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}), { status: 200 });

        await Request.fetch({ url: '/user/projects', method: 'GET' });

        expect(fetchMock.mock.calls[0][0]).toEqual(Request.buildURL('/user/projects'));
    });

    test('fetch throws with error status', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({}), { status: 400 });

        await expect(Request.fetch({ url: '/user/projects', method: 'GET' })).rejects.toThrow();
    });
});
