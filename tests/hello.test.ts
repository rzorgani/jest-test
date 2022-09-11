import { main } from "../src/functions/hello/handler";

describe('Unit test for hello file', () => {
    it('shoud return function', async () => {
        expect(true).toBeTruthy();
        expect(typeof main).toBe('function');

    });
})