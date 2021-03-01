describe('hackernews2', () => {
    it('should have a newest link', async () => {
        await browser.url(`https://news.ycombinator.com/`);
        await browser.pause(20000);

        const link =  await $('a[href="newest"]');
        await link.click();
        await browser.pause(20000);
        await browser.url(`https://news.ycombinator.com/`);

        expect(1).toBe(1);

    });
});

