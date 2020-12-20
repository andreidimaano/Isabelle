import axios from 'axios';

let kanyeInstance = axios.create({
    baseURL: 'https://api.kanye.rest'
});

let executeKanye = async () => {
    let response = await kanyeInstance.get('');
    return response.data;
}

describe('executeKanye', () => {
    it('should fetch data', async () => {
        await expect(executeKanye()).not.toEqual(undefined);
    });
    it('random test one', async () => {
        const data = {
            quote: 'kanye quote'
        };

        await expect(executeKanye()).not.toEqual(data);
    });
    it('random test multiple', async () => {
        let kanye1 = await executeKanye();
        let kanye2 = await executeKanye();

        expect(kanye1).not.toEqual(kanye2);
        await expect(executeKanye()).not.toEqual(kanye1);
        await expect(executeKanye()).not.toEqual(kanye2);
    });
    it('random test multiple 2', async () => {
        let kanye1 = await executeKanye();
        let kanye2 = await executeKanye();
        let kanye3 = await executeKanye();

        expect(kanye1).not.toEqual(kanye2);
        expect(kanye1).not.toEqual(kanye3);
        expect(kanye3).not.toEqual(kanye2);
        expect(kanye2).not.toEqual(kanye3);
        await expect(executeKanye()).not.toEqual(kanye1);
        await expect(executeKanye()).not.toEqual(kanye2);
        await expect(executeKanye()).not.toEqual(kanye3);
    });
})

