var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://www.localhost:8000.com');
    driver.findElement(webdriver.By.className('gsfi')).sendKeys('Digitro Tecnologia');
    driver.findElement({name:'q'}).sendKeys(webdriver.Key.ENTER);
    driver.findElement({xpath:'(//div[@id="search"]//div[@class="rc"]//h3/a)[1]'}).click();
    