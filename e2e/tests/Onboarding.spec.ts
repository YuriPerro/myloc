import { by, device, element } from 'detox';

describe('Tests onboarding flow app', () => {
  beforeAll(async () => {
    await device.launchApp({
      permissions: {
        location: 'always',
      },
    });
  });

  it('should be test the buttons, scroll and flow app', async () => {
    const buttonNext = element(by.id('onboarding-button-next'));
    await buttonNext.tap();
    await buttonNext.tap();

    await element(by.id('refresh-button')).tap();

    await element(by.id('container')).swipe('up', 'fast', NaN, NaN, 0.5);
    await element(by.id('container')).swipe('down', 'fast', NaN, NaN, 0.5);
  });
});
