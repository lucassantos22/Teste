const webdriver = require(selenium-webdriver),
    By = webdriver.By,
    until = webdriver.until;

driver = new webdriver.Builder().forBrowser('chrome')