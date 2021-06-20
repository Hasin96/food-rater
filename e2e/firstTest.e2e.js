describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have hello world', async () => {
    await expect(element(by.id('helloworld'))).toBeVisible();
  });

});
