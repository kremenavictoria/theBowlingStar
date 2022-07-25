$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "\tIn order to do internet banking\n\tAs a valid Para Bank customer\n\tI want to login successfully",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.tau.steps.Steps.setup(Steps.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(DataTable) in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tau.steps.Steps.quitBrowser(Steps.java:148)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter valid \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "\"autotester\"",
        "\"password\""
      ]
    },
    {
      "cells": [
        "\"tautester\"",
        "\"password\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.tau.steps.Steps.setup(Steps.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"autotester\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials_(String,String) in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tau.steps.Steps.quitBrowser(Steps.java:148)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.tau.steps.Steps.setup(Steps.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"tautester\" and \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials_(String,String) in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tau.steps.Steps.quitBrowser(Steps.java:148)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter valid \u003cusername\u003e and \u003cpassword\u003e with \u003cuserFullName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "userFullName"
      ]
    },
    {
      "cells": [
        "\"autotester\"",
        "\"password\"",
        "\"Auto Tester\""
      ]
    },
    {
      "cells": [
        "\"tautester\"",
        "\"password\"",
        "\"TAU Tester\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.tau.steps.Steps.setup(Steps.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"autotester\" and \"password\" with \"Auto Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(String,String,String) in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tau.steps.Steps.quitBrowser(Steps.java:148)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.tau.steps.Steps.setup(Steps.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid \"tautester\" and \"password\" with \"TAU Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(String,String,String) in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tau.steps.Steps.quitBrowser(Steps.java:148)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login Successful - Inline Parameters",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.tau.steps.Steps.setup(Steps.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid credentials",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(DataTable) in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/kremena.stoyanova/IdeaProjects/tau-cucumber-course-master/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat com.tau.steps.Steps.quitBrowser(Steps.java:148)\r\n",
  "status": "failed"
});
});