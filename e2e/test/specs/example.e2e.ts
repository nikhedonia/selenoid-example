describe('hackernews', () => {
    it('should have a newest link', async () => {
        await browser.url(`https://news.ycombinator.com/`);
        browser.pause(20000);

        const link =  await $('a[href="newest"]');
        await link.click();
        browser.pause(20000);
        await browser.url(`https://news.ycombinator.com/`);

        expect(1).toBe(1);

    });
});

