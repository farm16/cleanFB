const { Builder, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.facebook.com");
    await driver
      .findElement(By.name("email"))
      .sendKeys("ffajardo6969@gmail.com");
    await driver.findElement(By.name("pass")).sendKeys("xxxx");
    await driver.sleep(10000); //sleeps for 10 sec
    // await driver.findElement(By.id("tsf")).submit();
    // await driver.wait(until.elementLocated(By.id("search")));
    // await driver.findElement(By.partialLinkText("nehalist.io")).click();
    // await driver.wait(until.titleIs("nehalist.io"));
  } finally {
    await driver.quit();
  }
})();
