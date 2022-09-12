import { main } from "../functions/hello/handler";

describe('Unit test for hello file', () => {
    it('shoud return function', async () => {
        expect(true).toBeTruthy();
        expect(typeof main).toBe('function');

    });
})