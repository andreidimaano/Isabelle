import sum from "../sum";

describe('sumTest', () => {
    describe('isCorrectSum', () => {
      it('should output 2',  () => {
        const test = sum(0, 2);
        expect(test).toEqual(2);
      });
    });
  });