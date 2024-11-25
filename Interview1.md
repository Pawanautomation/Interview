# SDET Interview preparation

Hey everyone! Please check out the webpage I’ve created. Due to limited users limit from Notion, I’ve only been able to add a few people to the Notion page so far. But don’t worry, I’ll keep adding interview experiences as they come in!

[https://confusion-talos-a77.notion.site/SDET-Interview-preparation-29f6981f93b946f0948a760eab702f75](https://www.notion.so/SDET-Interview-preparation-29f6981f93b946f0948a760eab702f75?pvs=21)

Global Logic: 

1) What are the different ways to declare a string in Java

2) How is memeory allocated in String literal and New String class object

3) What is interface and abstract class in java

4) Why constructor is allowed for an abstract class

5) What is use of finally block

6) What are commonly used interfaces in Selenium

7) What is difference between find element and find elements

8) How do you handle different windows in selenium

9) Difference between 401 and 403 status codes

10) What is return type of getWindowHandles() method

11) WAP to find second largest number from an array

12) Given a string "To DO or Not to dO", WAP to find occurrence of each character in the string.

[Walmart & Boeing Interview :](https://www.notion.so/Walmart-Boeing-Interview-144270fe16b9807e8c23e481d70b3e53?pvs=21)

[OpenText](https://www.linkedin.com/company/opentext/) recent SDET Interview Questions

𝐑𝐨𝐮𝐧𝐝𝟏:(not the exact but similar questions on same concepts)

1. Given a string s, find the length of the longest substring without repeating characters.

Example:

Input: "abcabcbb"

Output: 3

Explanation: The answer is "abc", with a length of 3.

𝐀𝐩𝐩𝐫𝐨𝐚𝐜𝐡: Use a sliding window technique with two pointers:

2. Write a function that, given a m x n matrix where each row and each column are sorted in ascending order, searches for a given integer target.

matrix = [

[1, 4, 7, 11],

[2, 5, 8, 12],

[3, 6, 9, 16],

[10, 13, 14, 17]

]

target = 5

Output: True

𝐀𝐩𝐩𝐫𝐨𝐚𝐜𝐡:

Start at the top right of the matrix.

If the current number equals the target, return True.

If the current number is greater than the target, move left.

If the current number is less than the target, move down.

Continue until you find the number or exit the matrix bounds.

# Test Automation Interview Questions pattern

**PS : Please add all your interview experience with your name(optional), role and total rounds given with full information and company name. How did you get this role and where did you apply or referral details if you would like to share here - this will help others to reach them.** 

How do you handle a stale element in Selenium?

- > Use a try-catch block to catch StaleElementReferenceException and re-locate the element.

2. Why might Selenium’s hover or click not work on an element, and how do you resolve it?

- >Possible reasons: dynamic content or overlays. Solutions: use JavaScriptExecutor or scroll the element into view.

3. How do you reverse a string without reversing special characters?

- >Traverse from both ends, swapping only alphabetic characters while skipping special characters.

4. How do you find k closest values to a target in a Binary Search Tree (BST)?

- >Use in-order traversal and a min-heap or sliding window for efficiency.

5. What’s the best way to sort an array of 0s, 1s, and 2s?

- >Apply the Dutch National Flag algorithm for linear-time sorting.

6. What are the SOLID principles in software design?

- >Key OOP principles for better code: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.

7. How do you find the minimum deletions to make letter frequencies unique in a string?

- >Count letter frequencies and adjust them to ensure uniqueness with minimal deletions.

8. What are essential credit card test cases for validations?

- >Check number length, format, and type-specific rules.

What challenges might a team face when transitioning from a traditional release model to a Continuous Deployment pipeline, and how would you address them?

1. How do deployment pipelines integrate security practices (DevSecOps), and what measures would you implement to ensure that security is not compromised during Continuous Deployment?
2. What considerations should be taken when implementing a multi-region deployment strategy to ensure availability and minimise latency?
3. Imagine a scenario where a deployment to production fails after 75% of a Rolling Deployment has been completed. What strategies would you employ to minimise service disruptions and revert to the previous stable version?
4. How would you implement environment-specific configurations securely in a CD pipeline to prevent exposure of sensitive data (e.g., API keys, database passwords)?
5. Explain how you would use feature flags in conjunction with Continuous Deployment to manage the release of new features without impacting the entire user base.
6. Circle CI users sometimes encounter parallel execution challenges during large-scale deployments. How would you structure a Circle CI pipeline to ensure efficient, synchronised multi-environment deployments?
7. How do you implement a robust monitoring system in a Jenkins or Circle CI pipeline to automatically halt deployments if predefined metrics (e.g., error rates, response times) exceed acceptable thresholds?
8. How would you design a CD pipeline for a microservices architecture to ensure that interdependencies between services are handled properly during deployment?
9. How would you use container orchestration tools (like Kubernetes) in conjunction with Jenkins or Circle CI to achieve zero-downtime deployments for a high-traffic web service?

## 6 Steps to Master in Test Automation:

- Focus on Core Frameworks over Tools
- Don't try to learn every testing tool available. Focus on these essential frameworks deeply (As per your need and interest):
- Unit Testing: JUnit, TestNG, PyTest, NUnit
- API Testing: RestAssured, Postman
- UI Testing: Selenium WebDriver, Cypress, Playwright
- Mobile Testing: Appium, XCUITest, Espresso
- Performance Testing: JMeter, Gatling, K6
1. Create a Foundation of Key Testing Concepts
- Test Pyramid fundamentals
- Unit Tests (70%)

- Integration Tests (API) (20%)
- E2E Tests (10%)
- Test Design Patterns
- FIRST (Fast, Isolated, Repeatable, Self-validating, Timely)
- Arrange-Act-Assert (AAA) pattern
- Page Object Model
- Test Data Management
- Test Environment Management
- Master Each Testing Level
- Unit Testing
- Mocking and stubbing
- Test doubles (Mocks, Stubs, Fakes)
- Dependency injection
- Code coverage metrics
- Integration Testing
- API testing patterns
- Database testing
- Microservices testing
- Contract testing
- End-to-End Testing
- UI automation patterns
- Cross-browser testing
- Mobile testing
- Parallel execution
1. Learn Modern Development Practices
- Continuous Integration/Continuous Deployment (CI/CD)
- Jenkins pipelines
- GitHub Actions
- Azure DevOps
- CircleCI
- Test Automation in Agile
- Shift-left testing
- Test-Driven Development (TDD)
- Behavior-Driven Development (BDD)
- Testing in sprints
- Automated reporting
1. Practice with Automation Patterns
- Design Patterns
- Page Object Model
- Factory Pattern
- Singleton Pattern
- Builder Pattern
- Strategy Pattern
- Framework Architecture
- Modular framework design
- Data-driven testing
- Keyword-driven testing
- Hybrid frameworks
1. Expand into Specialized Testing Areas
- Performance Testing
- Load testing
- Stress testing
- Scalability testing
- Performance metrics
- Security Testing
- OWASP top 10
- Penetration testing
- Security scanning
- API security

Additional Tips:

1. Version Control: Master Git for test code management
2. Code Review: Practice reviewing test code and accepting feedback
3. Documentation: Learn to write clear test documentation and specifications
4. Infrastructure: Understand Docker, cloud platforms, and testing infrastructure
5. Debugging: Develop strong debugging and problem-solving skills

Remember, focus on creating maintainable, reliable, and efficient test automation rather than just automating everything possible.

## Test Automation Interview Questions Part 2

𝐑𝐚𝐭𝐞 𝐋𝐢𝐦𝐢𝐭𝐢𝐧𝐠: APIs often have rate #limits to prevent abuse. Automation scripts can simulate excessive requests and validate the API’s response when the limit is exceeded. Example: Sending more than 100 #requests in a minute and checking if the response returns 429 Too Many Requests.

1. 𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧: Testing scenarios where users login via OAuth, JWT, or other mechanisms. Example: Validating token-based #authentication for different user roles using automation scripts in Selenium or Cypress.
1. 𝐀𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐚𝐭𝐢𝐨𝐧: Verifying that only users with the correct permissions can access certain APIs. Example: #Automating role-based access tests, ensuring unauthorized users receive proper error messages.
2. 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐞𝐬:
->𝐁𝐥𝐮𝐞-𝐆𝐫𝐞𝐞𝐧 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭: Two environments (Blue and Green) are maintained. The new version is deployed to the #inactive environment, and traffic is switched only after successful testing. Example: Switch from Blue (live) to Green (new version) with zero downtime.
- >𝐂𝐚𝐧𝐚𝐫𝐲 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭: Gradually roll out a new version to a subset of users while monitoring its #performance. If stable, the update is rolled out to the rest. Example: Release the update to 10% of users, monitor, and expand if no issues arise.
- >𝐑𝐨𝐥𝐥𝐢𝐧𝐠 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭: Incrementally replace the old #version with the new one across servers, ensuring no downtime but slower rollouts. Example: Update 20% of servers at a time, ensuring minimal impact.
- >𝐑𝐞𝐜𝐫𝐞𝐚𝐭𝐞 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭: The current version is fully taken down before deploying the new one. Simple but involves #downtime. Example: Take down the app, deploy the new version, and bring it back online.
- >𝐀/𝐁 𝐓𝐞𝐬𝐭𝐢𝐧𝐠: Similar to canary, but serves different user experiences (A and B) to compare #performance and user #feedback. Example: Test new features on version B for a specific user group while keeping version A for

I recently had an interview for an SDET II role where I was asked some pretty challenging questions, particularly around API testing using the RestAssured framework. Here are a few questions that stood out:

1. How would you validate the dynamic structure of a Gmail API response where the number of unread emails varies?

For this question, I had to demonstrate how to handle a dynamic JSON response when the number of unread emails changes. I used JsonPath in RestAssured to extract the count of unread emails dynamically and validate it with assertions.

1. How would you automate OAuth2 authentication for accessing Gmail APIs in your RestAssured tests?

I needed to explain how to automate the OAuth2 authentication process using RestAssured. This included obtaining an access token, managing token expiration, and using it to authorize requests to Gmail's secure APIs.

1. How would you test the rate limits for Gmail API using RestAssured?

I was asked to describe how to test the rate limits of the Gmail API by simulating multiple rapid requests and detecting when the API starts returning a 429 Too Many Requests response. I proposed implementing a loop to send multiple requests, checking for the 429 status code, and adjusting the request strategy accordingly.

1. How would you validate the content of an email message retrieved from Gmail using RestAssured?

For this one, I had to show how to extract the email body from a response using JsonPath and then validate its content against expected values, considering scenarios where the content might be encoded.

1. How can you ensure your tests are resilient to Gmail API changes, such as new fields being added to the response?

This question was about designing tests that are flexible and future-proof. I discussed using JSON Schema validation with rest-assured-json-schema-validator to handle dynamic fields and maintain robust test coverage even when the API evolves.

Most Asking TestNG Questions for SDET Role 🔍

🔹 1. What is TestNG?
Be ready to explain what TestNG is and its key features. Describe how it facilitates test execution, reporting, and test configuration.

🔹 2. TestNG Annotations:
Understand the different annotations provided by TestNG, such as @Test, @BeforeSuite, @BeforeClass, @BeforeMethod, @AfterMethod, etc. Be prepared to explain when and how to use them in test scripts.

🔹 3. TestNG Data Providers:
TestNG offers data providers to feed test data dynamically. Familiarize yourself with how to use data providers and handle test data from external sources like Excel or databases.

🔹 4. TestNG Assertions:
Be ready to discuss different assertion methods provided by TestNG, such as assertEquals, assertTrue, assertFalse, etc. Understand how to use them effectively in test scripts for result verification.

🔹 5. TestNG Test Suites:
Explain how to create and execute test suites using TestNG. Understand how to group tests, define dependencies, and prioritize test cases within a test suite.

🔹 6. TestNG Listeners:
TestNG allows the use of listeners for customizing test execution. Familiarize yourself with different listeners provided by TestNG, such as ITestListener, ISuiteListener, IInvokedMethodListener, etc. Be prepared to explain when and how to use listeners.

🔹 7. TestNG Reporting:
Understand TestNG s built-in reporting capabilities and how to generate meaningful test reports. Explain the different report formats available and how to customize reports for better readability.

🔹 8. TestNG Parallel Execution:
Be ready to discuss how TestNG supports parallel test execution, including methods for parallelizing tests at the suite, class, or method level. Explain the benefits and challenges of parallel test execution.

🔹 9. TestNG Data-driven Testing:
TestNG supports data-driven testing using various approaches such as
DataProviders, Excel files, CSV files, etc. Understand how to implement data-
driven tests and explain the advantages of this approach.

🔹 10. TestNG Dependencies:
Be prepared to discuss how TestNG handles test dependencies, allowing tests to be executed in a specific order based on their dependencies. Understand how to define dependencies using annotations or XML configuration.

## Coding Questions :

1. Given an unsorted array of integers, find the third largest number in the array. If the array has less than three distinct numbers, return the largest number.
Example:
Input:
arr = [2, 4, 1, 5, 3, 6]
Output:
4
Explanation:
The sorted array in descending order is [6, 5, 4, 3, 2, 1]. The third largest number is 4.
2. Given an array of strings, group the strings that are anagrams of each other.
Example:
Input:
arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output:
[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
Explanation:
The groups of anagrams are ["eat", "tea", "ate"], ["tan", "nat"], and ["bat"].
3. Given an array of integers, find the largest number that does not have any duplicates in the array.
Example:
Input:
arr = [4, 3, 2, 7, 3, 4, 8]
Output:
8
Explanation:
The unique numbers are [2, 7, 8], and the largest among them is 8.

Salesforce interview questions->
.
.

1. Given an array of integers including positive and negative numbers, find all the subarrays whose sum equals zero.
Example:
Input:
arr = [4, -3, 2, 1, 6, -4, -2, 3, 5]
Output:
[[4, -3, -1], [2, 1, -4, 1], [6, -4, -2], [-3, 2, 1, 0], [-4, 3, 1], [4, -4], [-3, 2, 1, -4, 3, 5]]
2. Given an unsorted array of integers, find the kth largest element in the array. The kth largest element is the element that would be in the kth position if the array were sorted in descending order.
Example:
Input:
arr = [3, 2, 1, 5, 6, 4]
k = 2
Output:
5
Explanation:
If the array is sorted in descending order, it becomes [6, 5, 4, 3, 2, 1]. The 2nd largest element is 5.

Test cases and dry runs are crucial. Always start by considering edge cases and boundary cases, or else you risk losing points, getting #anxious, and having to refactor if the #interviewer spots a bug. Make it a habit to do a dry run in every interview—it will definitely earn you #extra points.

## FICO SDET Interview questions round 1 :

Coding 1- **Mean and median of an unsorted array**

Create a Java program that dynamically accepts numbers, allowing you to store them, remove specific numbers if needed, and calculate both the mean and median of the stored numbers. The program should handle these operations efficiently as numbers are added or removed over time in firstly

Coding 2

You are required to write a test class using TestNG, Maven and Rest-assured that performs an API call to the login endpoint of the DummyJSON API.
The test should verify that the API is functioning correctly by sending a POST request with a
specific payload and validating the response.

Requirements:
API Endpoint:

URL: https://dummyjson.com/user/login
HTTP Method:

POST
Request Headers:

Content-Type: application/json
Request Payload:
{
"username": 'emilys',
"password": 'emilyspass'
}

verify the status code of response and assert that "token" key is present in response body.

Technical Questions 

1.what is diff b/w docker and docker start

2.what is docker run

3.what is docker volume and its type s and where we use it?

[4.how](http://4.how) to create a smallest resource in kubernetes cluster

[5.how](http://5.how) do you expose outside world cluster

6.what are the services Type in kubernetes

7.what is headless service and what is the use case of it

1. @DataProvider: Marks a method as a data provider supplying data for test methods
Ex:
@DataProvider(name = "testData")
public Object[][] testData() {
return new Object[][] {
{ "data1" },
{ "data2" }
};

**Recently asked interview questions for the Lead #SDETs position**
.
𝟏. 𝐓𝐫𝐚𝐜𝐞𝐚𝐛𝐢𝐥𝐢𝐭𝐲 𝐌𝐚𝐭𝐫𝐢𝐱: A Traceability Matrix is a document that helps ensure that test cases cover all requirements. It maps and traces user requirements with the test cases, ensuring no functionality is missed during testing. This matrix is crucial in Software Development and Testing because it ensures that every requirement has been tested.
𝐏𝐮𝐫𝐩𝐨𝐬𝐞:
->𝐄𝐧𝐬𝐮𝐫𝐞𝐬 𝐂𝐨𝐯𝐞𝐫𝐚𝐠𝐞: Confirms that all requirements have corresponding test cases.
->𝐓𝐫𝐚𝐜𝐤𝐬 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬: Helps track the status of requirements and testing.
->𝐈𝐝𝐞𝐧𝐭𝐢𝐟𝐢𝐞𝐬 𝐆𝐚𝐩𝐬: Easily spots missing requirements or tests.
->𝐌𝐚𝐧𝐚𝐠𝐞𝐬 𝐂𝐡𝐚𝐧𝐠𝐞𝐬: Tracks changes in requirements and ensures they are tested.

𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬:
->𝐑𝐞𝐪𝐮𝐢𝐫𝐞𝐦𝐞𝐧𝐭 𝐈𝐃: Unique identifier for each requirement.
->𝐑𝐞𝐪𝐮𝐢𝐫𝐞𝐦𝐞𝐧𝐭 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: Brief description of the requirement.
->𝐓𝐞𝐬𝐭 𝐂𝐚𝐬𝐞 𝐈𝐃: Unique identifier for each test case.
->𝐓𝐞𝐬𝐭 𝐂𝐚𝐬𝐞 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: Brief description of the test case.
->𝐒𝐭𝐚𝐭𝐮𝐬: Status of the test case (e.g., Passed, Failed, In Progress).

1. How do you prioritize test cases when you have limited time for testing?
->Effective prioritization of test cases ensures that critical functionalities are tested first, minimizing risk and maximizing the value of testing within the limited time available. This approach demonstrates a clear understanding of the application's priorities and the potential impact on users and the business.
2. You are automating a complex workflow with multiple steps. Could you please tell me how you can ensure that the test is maintainable?
3. You are given a rotated sorted array and a target value. The array was originally sorted in ascending order but then rotated at an unknown pivot. Your task is to determine if the target value exists in the array. If it does, return its index; otherwise, return -1. The algorithm should run in O(log n) time.
->To solve this problem in O(log n) time, we can use a modified binary search algorithm.
4. How can we ensure that developers receive clear and meaningful feedback regarding test failures during the CI process, especially when dealing with issues like "staleElement" exceptions or flaky tests?
5. What best practices can be implemented to help developers understand whether test failures are related to their code changes or to issues with the test
infrastructure or automation scripts?
6. How can we improve communication between testing and development teams to address test failures effectively and collaboratively?
7. What steps can be taken to continuously improve the testing process and reduce the impact of non-code-related test failures on the overall build outcome?

Basics of OOP concepts( this is always the first question asked in almost all the 25+ interviews I attended).

1. Deep dive into oop concepts. Questions on constructors,( use of base keyword), method overloading, method overriding, static class.
2. Can we have a private constructor? if yes, then when do we use it?
how do we prevent a class from being overridden?
3. Can we extend the functionality of inbuilt methods like ‘strings’ without affecting its basic functionality(using extension methods)?
4. Write a program to reverse a string, palindrome of string.
5. write a program to find the max sum of contiguous subarrays in an array of integers

3.     Which version of Selenium you are using?
4.     Which version of Appium you are using?
5.     What is synchronisation in selenium?
6.     What are the different types of exceptions that you came across in your project?
7.     What are the updates from Appium 1.0 to Appium 2.0?
8.     What is Thread.Sleep(); Which exception you will get when you use it?
9.     Explain the Accessibility Testing.
10.  Write a java program to print first 10 fibonacci Elements. Take 0,1 as first and Second Elements.(Use only online java compiler)

## **||API automation interviews QUESTIONS ,focusing on using Rest Assured ||**

1. What is Rest Assured?
2. How do you set up Rest Assured in a Java project? - Walk through the steps to include Rest Assured in a Maven-based Java project.
3. How do you perform a GET request using Rest Assured? - Provide an example code snippet demonstrating how to send a GET request and validate the response.
4. What is the significance of status codes in API responses? - Explain the importance of status codes (e.g., 200, 404, 500) in API responses and how you can validate them using Rest Assured.
5. How do you pass query parameters in a Rest Assured request? - Show how to include query parameters in a request URL using Rest Assured.
6. Explain how to validate JSON responses using Rest Assured. - Provide an example of validating specific elements, attributes, or values in a JSON response.
7. How do you handle authentication in Rest Assured? - Describe different authentication methods (basic, token, etc.) and demonstrate how to implement them using Rest Assured.
8. What is serialization and deserialization in Rest Assured? - Explain the concepts of converting Java objects to JSON (serialization) and JSON to Java objects (deserialization) in Rest Assured.
9. How do you perform POST and PUT requests using Rest Assured? - Show how to send data in the request body for creating or updating resources using POST and PUT requests.
10. What is ResponseSpecBuilder in Rest Assured? - Discuss the purpose of ResponseSpecBuilder and how it can be used to define common validation expectations for responses.
11. How can you extract data from a response using Rest Assured? - Provide examples of extracting values from the response body and storing them for further use.
12. How do you handle dynamic values in API responses? - Discuss strategies for handling dynamic data (timestamps, unique IDs) in assertions when validating responses.
13. What are the benefits of using Rest Assured for API testing? - Highlight the advantages of using Rest Assured over other methods for API automation.

𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐯𝐬. 𝐀𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐚𝐭𝐢𝐨𝐧:
𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧:

1. 𝐖𝐡𝐚𝐭 𝐢𝐭 𝐢𝐬: Authentication is verifying a user's or system's identity. It answers the question, "Who are you?"
2. 𝐇𝐨𝐰 𝐢𝐭 𝐰𝐨𝐫𝐤𝐬: This is typically done through usernames and passwords, biometric data (like fingerprints), or security tokens. For example, when you log in to your email, you enter your username and password to prove that you are the rightful owner of that account.
3. 𝐑𝐞𝐚𝐥-𝐖𝐨𝐫𝐥𝐝 𝐄𝐱𝐚𝐦𝐩𝐥𝐞: When you swipe your ID card to enter your office building, the system checks if your card (and therefore, you) is valid. This is authentication.

𝐀𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐚𝐭𝐢𝐨𝐧:

1. 𝐖𝐡𝐚𝐭 𝐢𝐭 𝐢𝐬: Authorization is the process of determining what an authenticated user is allowed to do. It answers the question, "What can you do?"
2. 𝐇𝐨𝐰 𝐢𝐭 𝐰𝐨𝐫𝐤𝐬: Once your identity is authenticated, the system checks if you have the necessary permissions to access certain resources or perform certain actions. For example, after logging in to your email, you might be authorized to read your inbox but not to change server settings.
3. 𝐑𝐞𝐚𝐥-𝐖𝐨𝐫𝐥𝐝 𝐄𝐱𝐚𝐦𝐩𝐥𝐞: After swiping your ID card to enter your office (authentication), you might only have access to certain floors of the building. The access control system ensures that only authorized personnel can enter restricted areas. This is authorization.

𝐊𝐞𝐲 𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐜𝐞𝐬:

1. 𝐎𝐫𝐝𝐞𝐫 𝐨𝐟 𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐬: Authentication always comes before authorization. You must first prove your identity before the system can check what you’re allowed to do.
2. 𝐏𝐮𝐫𝐩𝐨𝐬𝐞: Authentication confirms identity; authorization grants or denies permissions based on that identity.

𝐀𝐧𝐚𝐥𝐨𝐠𝐲:
𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧: Showing your ID to a security guard at the entrance of a concert.
𝐀𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐚𝐭𝐢𝐨𝐧: The security guard checks your ticket to see if you’re allowed into the VIP section.

# Apple interview questions

Round 1:

1. Tell me about yourself
2. More about e-commerce domain
3. Scenarios to test music player application
4. Non-functional test cases for Pencil
5. Http and Https protocols?
6. What is the 500,400 status codes?
7. What is Cache and Cookies in web application?
8. How to review and back track if the 100th build gets failed?
9. Test scenarios for PDP page
10. Explain your framework
11. What will be the test data for testing music player application?
12. What tech stack used in your organisation?
13. What do you do in performance testing? Which tool you have used and how the load is decided for testing?
14. What is SDLC?
15. WAP to find the third largest number in the given array?

Round 2:
TestNG question:
@Test
test1(){ String text="sdds"; }

@Test(dependsOnMethod="test1",priority=1)
test2(){
//Second test method }

1. What's the execution order? Will there be any runtime or compile errors thrown?
2. How to get dynamic data from test1 method and pass it to test2 method as test data?

Java: Int amount = 596 Denominations:
output:
1 note of 500
1 note of 50
2 note of 20
1 note of 5
1 note of 1

Git command :
Master : commits - 58 57 56 branch-develop: 55

- Local git merge
1. How to merge latest commits from master to branch-develop in local IDE using git command
2. Can we update the commit message after committing and before pushing the changes?

Connection 2:
Round 1:

1. Panagram programming question
2. Multiple Questions related to Testing

Recently asked Interview questions for [hashtag#QA](https://www.linkedin.com/feed/hashtag/?keywords=qa&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7229343503309225984) [hashtag#Automation](https://www.linkedin.com/feed/hashtag/?keywords=automation&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7229343503309225984) role

1) Java program to remove duplicates characters from given String.

2) Program Remove the second highest element from the HashMap.

3) Java program to Generate prime numbers between 1 & given 4

number

4) How to find the missing values from a sorted array.

5) Java program to input name, middle name and surname of a

person and print only the initials.

5) Program to Print all Treemap elements?

6) What is a singleton Design Pattern? How do you implement that in your framework?

7) Write the Top 5 test cases for Booking Coupons.

8) What is serialization and deserialization?

9) What is the Difference between status codes 401 and 402? 1

10) Difference between selenium 3 and selenium 4?

11) What is delegate in Java and where do you use Delegate in your Framework?

12) How many maximum thread-pool can you open in the TestNG?

13) What are the Major challenges that come into the picture when you do parallel testing using TestNG and Grid?

14) How do you integrate your automation framework with the Jenkins pipeline?

15) What will happen if we remove the main method from the java program?

16) What are diff components there your current Project?

17) How do you pass parameters in TestNG?

18) Write the logic of retrying the failed test case with a minimum 3 numbers of time in Automation Testing. Which Interface do you use for it?

19) What is the OOPs concept in java?

20) What is encapsulation?

21) What is Polymorphism?

22) Difference Between Classes and Objects?

23) What is collection in Java?

24) What is out in System.out.println?

25) In How many ways can we create an object?

26) Why is Java not 100% Object-oriented?

27) Can we make a constructor as Static?

28) How to convert a JSON object to a java object using Jackson?

29) What is the difference between Abstraction Class and Interfaces?

30) Difference between String, StringBuilder, and Stringbuffer?

31) What are other immutable classes in Java apart from String?

32) Difference between TreeMap and HashMap?

33) How do you set priorities for test automation, which test needs to be automated first?

34) How do you set test case priorities for your team?

35) What are the functional things you need to test on e-commerce sites?

# Adobe interview questions

Adobe QA Interview Questions for #QA role
Brief about yourself and your experience.
Challenges faced in Automation.
Explain webdriver architecture.
What are the protocols used between the client and server?
What is the application server?
How do you test the server connection?
Why is CSS used?
Explain different types of HTML tags and explain each one of them.
Some questions on HTML coding.
What is the difference between SEVERITY and PRIORITY?
Give some examples of low severity and high priority of your project.
How many locators are there? What are they?
Why is the framework needed?
How can you refresh your Browser?
Which design pattern was used in your Framework
explains how to create a file in build.xml
Describe your framework.
Difference between  Selenium RC and  selenium web driver
Explain the architecture of your project
Draw your framework
Write code for fetching the data from the excel sheet
Write a code for the palindrome number.
Explain about Jenkins
Explain your control version tool
How to handle dropdown
How to handle window ID
How to handle with google search text box
How to handle alerts and window pop-ups?
How will you get the frame ID?
How to handle dynamic web tables?
Why are we using the following siblings in XPath?
Create a page factory for the login page
How will you group and add classes from different packages?
Write a program to reverse a LinkedList.

## GE healthcare

1st round:
o  Diff between page object and page factory?
o  What is data driven testing?
o  Diff between abstract class and interface?
o  Singleton dsgn pattern?
o  Explain framework?
o  How u estimate ur work?
o  static and dynamic binding
o  Stale element exception?
o  Desired capability?
o  Diff between hashmap and hashset
o  How u integrate rest assured with project?
o  Approach and types of testing performed by u on API testing?

2nd Round:
o  Basic intro
o  Background in cucumber
o  What all is included in runner class in cucumber
o  How u implemented listeners in ur framework
o  Explain interface in ur framework perspective not definition
o  How many listener interfaces u r using
o  How u use loggers in ur project for debugging
o  Is there any log listeners in ur framework? If not can u use it?
o  What is constructor?
o  Can we have more than one constructor in a class?
o  In default constructor can u initialize variables even without passing parameters?
o  What exceptions can occur in selenium and that u have seen in project.
o  What is stale element exception. Then what is timeout exception?
o  How u setup environment in postman
o  How u store a response of one request and use same response in another request in postman
o  Diff between 200 and 201.
o  If u create any resource u get 201. But sometime we get 200 as well as for successful response. How will u verify this 200 is coming instead of 201, if it’s a bug?
o  How u r storing url of ur application in framework
o  Suppose u have 50 apis in config out of which 48 are common to dev and test env but 2 are diff in both. How u handle this in framework.

3rd round: Managerial

o  Tell me about yourself
o  How many frameworks have you worked on till now?
o  Tell me something about TestNG that you liked?
o  Do you use maven project and if yes why?
o  Tell me about cucumber and why you are not using cucumber in your project. Explain properly with valid points
o  Tell cucumber features
o  Given an api to fetch user details by sending empId in request what can be the possible test cases. Can you write some cases?
o  Suppose your org has some QAs and they have all manual test cases available with them. Now you want to hire someone to automate your testcases. From your end what automation tool will you suggest and why? How will you estimate time for all these scenarios to automate? What can be the risks involved in above scenarios? Can you name some of them?
o  How many project time estimates do you know?
o  In recent time any accomplishment did you receive from employee that does not belongs to your team? How you helped them?
o  Are you willing to relocate?
o  Do you have any questions to me?
o  At the end one program was given to identify if a given number is prime or not. The task was to reduce the time complexity of given code.

Tell me about yourself
o  How many #frameworks have you worked on till now?
o  Tell me something about #TestNG that you liked?
o  Do you use #maven project and if yes why?
o  Tell me about #cucumber and why you are not using cucumber in your project. Explain properly with valid points

o  Tell some cucumber features
o What do you prefer #TestNG or #Cucumber and why?
o  Given an #Api to fetch user details by sending "empId" in request what can be the possible test cases. Can you write some cases?

o  Suppose your org has some #QAs and they have all manual test cases available with them. Now you want to hire someone to automate your testcases. From your end what automation tool will you suggest and why? How will you estimate time for all these scenarios to automate? What can be the risks involved in above scenarios? Can you name some of them?

o  How many project #time estimates do you know?
o  In recent time any #accomplishment did you receive from employee that does not belongs to your team? How you helped them?

o  Are you willing to relocate?
o  Do you have any questions to me?
o  At the end one program was given to identify if a given number is prime or not. The task was to reduce the time complexity of given code.

## EPAM Systems Interview Questions for #QA / #SDET role (Exp: 8+ yrs)

1. How to handle cookies in selenium?
2. Can we create static class? What is static keyword?
3. what is clean code?
4. Path and query parameter what are these and which is optional?
5. Java 8 streams?
6. Background keyword, Scenario Outline, Scenario, Data Table?
7. Where do you run your test cases?
8. Which version of selenium you have used
9. Window A,B,C,D, How to switch to C and close it?
10. How to handle dropdown?(By select class and alternate is by using findElements?
11. Write a code using HashMap
Brian – 21
Lee – 22
Cathe – 45
Using key and value and find the javerage?
12. Multiple catch block
Try{}
Catch(exception e){
Syso(A);
Catch(Arithmetic exception)
Syso(B);
13. The logic of parent and child exception
14. When to use abstract class and when to use interface
15. Why can’t we create the framework with all static methods?
16. Int arr 1,2,3,4,5,7,8,9, Skip 3 and all elements after 3 and then skip 7 and then give some
17. Implement hashmap in the interface and use it in the main
18. Remove redundancy for a string.

Only one TestNG guide for SDETs

Let's jump right in understanding all important annotations & configurations of TestNG

1. @Test: Marks a method as a test method
2. @BeforeSuite: Marks a method to run before any test suite
3. @AfterSuite: Marks a method to run after all tests in a suite have run
4. BeforeTest: Marks a method to run before any test method belonging to the classes inside the <test> tag in XML
5. @AfterTest: Marks a method to run after all test methods belonging to the classes inside the <test> tag in XML
6. @BeforeClass: Marks a method to run before the first test method in the current class is invoked
7. @AfterClass: Marks a method to run after all the test methods in the current class have been run
8. @BeforeMethod: Marks a method to run before each test method
9. @AfterMethod: Marks a method to run after each test method
10. @Parameters: Marks a method or a class as a parameter provider for test methods
Ex:
@Parameters({ "browser", "platform" })
@BeforeMethod
public void setUp(String browser, String platform) {
// Setup logic using parameters
}
11. @Listeners: Marks a listener class to listen to events during test execution, Mostly used for WebDriverEvent Listeners, TestNG Listeners
12. @Factory: Marks a method to generate instances of test class dynamically
13. TestNG XML for Parameters:

<suite name="ParameterizedSuite"> <test name="ParameterizedTest"> <parameter name="browser" value="chrome"/>  <classes>
<class name="TestNGExample"/> </classes> </test> </suite>

1. Parallel Test Execution:

<suite name="ParallelSuite" parallel="tests" thread-count="2">
<test name="Test1"> <classes> <class name="TestClass1"/> </classes> </test>
<test name="Test2"> <classes> <class name="TestClass2"/> </classes> </test> </suite>

1. invocationCount specifies the number of times a test method should be invoked
2. threadPoolSize controls how many threads TestNG will use to execute the invocations of a test method
Ex: @Test(threadPoolSize = 3, invocationCount = 6)
public void testMethod() {
// Test logic
}
3. Dependency Testing: Define dependencies between test methods
Ex:
@Test(dependsOnMethods = "firstMethod")
public void secondMethod() {
// Test logic
}
4. Grouping: Group tests to execute specific sets of tests
Ex:
@Test(groups = "smoke")
public void smokeTest() {
// Smoke test logic
}
5. Test Priority: Set priority for test methods, works in alphabetical order or smallest number.

SDET - Interview Question:
Create an XPath to select all mobile phones on the Flipkart website that are priced under 10000.

Visit Flipkart.
Enter "mobile" in the search bar.
Click the Search button.

Solution:
//div[@class="Nx9bqj _4b5DiR" and number(translate(text(),",₹","")) < 10000]

## Deloitte interview questions:

Explain STLC, entry and exit criteria of testing, smoke vs. sanity testing, and your framework. Difference between TestNG and Cucumber. Why use Maven? Connecting Selenium with Jenkins. Merging files and resolving conflicts in Git. TestNG annotations and their use. Disabling certain scripts. Prioritizing scripts. Scheduling 100 tasks together. Soft vs. hard asserts. Write an XPath for an element on MakeMyTrip.

## Scenario Based Test Automation Interview Questions :

(1) You are asked to automate a functionality that is not yet fully developed. How do you handle this?

(2) If a Test fails, what will be your next step?

(3) If the application has minor changes, what would be your approach to modifying the Automation scripts?

(4) How would you automate login functionality for a website?

(5) How would you automate a Test scenario where you need to check if an email is sent after a user registration?

(6) If there is a scenario that takes a long time to execute, would you prefer Manual Testng or Automation Testing? Why?

(7) How would you automate a scenario where you need to validate the contents of a downloaded file after clicking a button on a webpage?

(8) How would you automate a scenario where you need to verify a specific colour, font, and position of an element on a webpage?

(9) How would you handle pop-up windows or alert boxes in your Automation script?

(10) How would you automate a scenario where you need to verify if a user is able to scroll down a webpage until the footer section is visible?

(11) You've been asked to automate a legacy application. What is your approach?

(12) A script you wrote was working fine yesterday but is failing today. How do you troubleshoot?

(13) Your Automation scripts are running slowly. How can you improve the speed?

(14) Your Automation script is failing due to a change in the application. How do you handle this?

(15) How would you automate a scenario where you need to verify a specific colour, font, and position of an element on a webpage?

- ************

Answers for all the above questions and for similar End to End Interview Questions to CRACK ANY SDET INTERVIEWS (for both experienced and freshers)

https://bit.ly/4bvGtjX

[Apple interview questions ](https://www.notion.so/Apple-interview-questions-66ebd3f487834bd0a23773814b52bd5c?pvs=21)

𝟱✅ out of 30 learnings as a SDET -
𝗦𝘆𝗻𝗰𝗵𝗿𝗼𝗻𝗶𝘇𝗲𝗱 𝗕𝗹𝗼𝗰𝗸𝘀 𝗮𝗻𝗱 𝗠𝗲𝘁𝗵𝗼𝗱𝘀: 𝗔 𝗖𝗼𝗿𝗻𝗲𝗿𝘀𝘁𝗼𝗻𝗲 𝗼𝗳 𝗣𝗮𝗿𝗮𝗹𝗹𝗲𝗹 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗼𝗻 𝗧𝗲𝘀𝘁𝗶𝗻𝗴

In the dynamic world of modern software development, parallel automation testing has become indispensable for ensuring quality and efficiency. To guarantee data integrity and prevent race conditions in such environments, synchronized blocks and synchronized methods emerge as essential tools.

𝗨𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗦𝘆𝗻𝗰𝗵𝗿𝗼𝗻𝗶𝘇𝗮𝘁𝗶𝗼𝗻
Synchronization in Java is a mechanism that ensures exclusive access to shared resources, preventing multiple threads from modifying the same data simultaneously. This is crucial in parallel testing, where multiple threads might interact with shared objects or data structures.

𝟭) 𝗦𝘆𝗻𝗰𝗵𝗿𝗼𝗻𝗶𝘇𝗲𝗱 𝗕𝗹𝗼𝗰𝗸𝘀:
-Enclose the code that needs to be synchronized within a block.
-Use a synchronized keyword followed by an object reference.

Example:
synchronized (object) {
// Code to be synchronized
}

𝟮) 𝗦𝘆𝗻𝗰𝗵𝗿𝗼𝗻𝗶𝘇𝗲𝗱 𝗠𝗲𝘁𝗵𝗼𝗱𝘀:

- Apply the synchronized keyword directly to a method's declaration.
- The object on which the method is called acts as the lock.

Example:
public synchronized void synchronizedMethod() {
// Code to be synchronized
}

𝗦𝗶𝗴𝗻𝗶𝗳𝗶𝗰𝗮𝗻𝗰𝗲 𝗶𝗻 𝗣𝗮𝗿𝗮𝗹𝗹𝗲𝗹 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗼𝗻 -

1. Data Integrity: Prevents multiple threads from modifying the same data simultaneously, ensuring that test results are consistent and reliable.
2. Race Condition Avoidance: Eliminates the possibility of unexpected behavior caused by threads interfering with each other's operations.
3. Shared Resource Management: Controls access to shared objects like global variables, databases, or network connections.
4. Framework Stability: Ensures that the framework's core components function correctly and reliably in a multithreaded environment.

𝗕𝗲𝘀𝘁 𝗣𝗿𝗮𝗰𝘁𝗶𝗰𝗲𝘀-

1. Use synchronization judiciously: Overuse can lead to performance bottlenecks.
2. Avoid circular dependencies: Prevent deadlocks by ensuring that threads don't wait for each other in a circular manner.

𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝗢𝗳 𝗜𝘁'𝘀 𝗨𝘀𝗮𝗴𝗲: 𝗜𝗻 𝗦𝗶𝗻𝗴𝗹𝗲𝘁𝗼𝗻 𝗣𝗮𝘁𝘁𝗲𝗿𝗻
The singleton pattern, which guarantees that only one instance of a class exists, often uses synchronization to ensure thread safety.

𝗝𝗔𝗩𝗔 𝗖𝗢𝗗𝗘 -
public static Singleton getInstance() {
if (instance == null) {
synchronized (Singleton.class) {
if (instance == null) {
instance = new Singleton();
}
}
}
return instance;
}

✔ By mastering synchronized blocks and methods, you can effectively write robust and reliable parallel automation tests, ensuring the quality and integrity of your software.

## Deloitte

Technical 1

1. Common question( Intro+ project + framework architecture)
2. Data selection in Calendar, Excel iteration then send values to text box.
3. What are Idempotent methods? How is it relevant in RESTful web
services domain?
4. Based on what factors, you can decide which type of web services you
need to use — SOAP or REST?
5. What is Payload in terms of RESTful web services?
6. importance of API documentation in API automation testing?
7. Have you integrated automation testing into CI/CD pipelines before?
8. Explain PSVM, SYSOUT?
9. Jenkins and GIT
10. Basic selenium question and SQL?

✅ Technical 2

1. Common question(Intro)
2. Java(Collection Questions only)
3. Java Programming (Sort array in reverse order)
4. How do you handle maintenance and updates of automated test scripts?
5. Does finally {} block always run?
6. Automate one page (Login-Add to cart Assert-logout-Reporting).

✅ Managerial Round

1. In manual testing, it takes 10 minutes, whereas in automation, it takes
10 minutes to check functionality, so what would be your preference? and
Why?
2. how comfortable are you with programming languages other than Java
Selenium?
3. How do we identify what can be automated?
4. Can you discuss a challenging automation project you’ve worked on and
how you overcame obstacles?
5. How do you stay updated with the latest trends and best practices in
automation testing?
6. Normal discussion about previous work? What do you like the most?

Sdet java selenium

1. Explain a keyword-driven framework.
2. Which databases have you worked with?
3. How do you connect to an Oracle database via test automation? Share a code example.
4. How do you connect to a Postgres database via test automation? Provide a code snippet.
5. Can you name an instance from your framework where you utilized polymorphism?
6. Define abstraction.
7. What are the key differences between abstract classes and interfaces? How have you used both in your framework?
8. How do you fetch data from nested JSON using Rest Assured?
9. How do you validate APIs? What challenges have you faced in API automation?
10. What does "static" mean in Java?
11. Which dependencies did you add while setting up the API automation framework?
12. What is the role of the Hamcrest dependency?
13. Write a Java program to check if a number is an Armstrong number (e.g., 153).
14. Write a Java program to reverse each word in a sentence. Example: “I am a Software Tester” -> “I ma a erawtfoS retseT”.
15. Have you worked with Linux commands? Which ones?
16. What is the Linux command for copying a file from one folder to another?
17. Write a Java code to read data from an Excel file.
18. Explain git rebase and when you would use it.
19. How do you resolve conflicts using the command line?
20. When do you use a try-catch block?
21. What’s the difference between `final` and `finally`?
22. How do you use file input/output streams in Java?
23. How did you configure Docker in your project?
24. How did you set up a Jenkins pipeline?
25. Have you used Selenium Grid in your projects?
26. How did you achieve cross-browser testing in your framework?
27. How many API tests have you run so far?
28. What is the purpose of a data provider in testing?

API

Explain the API testing you’ve done in your previous projects and the tools you used for API testing.
16. What are the different types of web service implementations other than SOAP?
17. What is the difference between SOAP vs REST?
18. In which option is REST response cached?
19. What are the different types of methods present in REST?
20. What are the different web service response codes?
21. Do you know the usage for these response codes?
22. Which tools are used for testing web services?

Selenium

What projects have you handled and what were your responsibilities?
3. Scope of automation testing in your previous projects.
4. Type of automation framework you have worked on and explain (Framework structure and all its components).
5. Explain POM (Page Object Model).
6. How have you used Excel sheets for automation?
7. Do you have any idea how we can integrate Jenkins in Selenium?
8. How to open multiple browsers in TestNG?
9. How to set test priority in TestNG?
10. What is your work experience with Selenium Grid?
11. Different types of locators and how we can write XPath.
12. How to handle pop-ups?
13. Which Java concepts for OOPS were used in your framework?
14. How to connect to a DB for validation?

𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧: Given a linked list, write a program to swap every two adjacent nodes and return the modified linked list. You must solve this problem without modifying the values in the list's nodes, only the nodes themselves may be changed.

𝐄𝐱𝐚𝐦𝐩𝐥𝐞:
Original list: 1 -> 2 -> 3 -> 4
After swapping: 2 -> 1 -> 4 -> 3

𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧: You are given two APIs: one that provides real-time stock prices and another that provides historical stock prices. Develop a system that validates the incoming real-time prices against historical data to detect anomalies or significant deviations.

Write a program to fetch data from both APIs, process and compare the prices, and identify outliers. Implement a mechanism to flag or log the anomalies in real time.

𝐇𝐢𝐧𝐭:
-> Use statistical methods like z-score or standard deviation to determine significant deviations.
-> Consider edge cases such as missing data or API failures.
-> Use multi-threading or asynchronous calls to handle real-time data efficiently.

Apple

1. How does Java’s garbage collection mechanism work to manage memory efficiently?

𝐀𝐧𝐬𝐰𝐞𝐫: Java’s garbage collector automatically identifies and deallocates objects that are no longer in use to free up memory, ensuring optimised performance and preventing memory leaks.

2. What’s the best approach to analyse the time and space complexity of an 𝐚𝐥𝐠𝐨𝐫𝐢𝐭𝐡𝐦?

Answer: To analyse an algorithm's complexity:

Time Complexity: Count the number of basic operations as a function of input size (e.g., O(n), O(log n)).

Space Complexity: Measure the additional space needed relative to input size (e.g., O(1), O(n)).

3. Implement an LRU (Least Recently Used) cache. It should support two operations: get(key) and put(key, value).

𝐑𝐞𝐪𝐮𝐢𝐫𝐞𝐦𝐞𝐧𝐭𝐬:

get(key): Returns the value if the key exists, otherwise returns -1.

put(key, value): Inserts or updates the key-value pair. If the cache reaches its capacity, remove the least recently used item.

𝐈𝐧𝐩𝐮𝐭/𝐎𝐮𝐭𝐩𝐮𝐭 𝐄𝐱𝐚𝐦𝐩𝐥𝐞:

Input: LRUCache(2), put(1, 1), put(2, 2), get(1), put(3, 3), get(2)

Output: 1, -1 (as key 2 was evicted)

4. Given an array of integer nums and an integer target, return 𝐢𝐧𝐝𝐢𝐜𝐞𝐬 of the two numbers such that they add up to the target.

𝐈𝐧𝐩𝐮𝐭/𝐎𝐮𝐭𝐩𝐮𝐭 𝐄𝐱𝐚𝐦𝐩𝐥𝐞:

Input: nums = [2, 7, 11, 15], target = 9

Output: [0, 1] (since nums[0] + nums[1] = 2 + 7 = 9)

5. Given a string containing (), {}, [], determine if the input string is valid. A string is valid if brackets close in the correct order.

𝐈𝐧𝐩𝐮𝐭/𝐎𝐮𝐭𝐩𝐮𝐭 𝐄𝐱𝐚𝐦𝐩𝐥𝐞:

Input: "()[]{}"

Output: True

Input: "(]"

Output: False

# R system

1. Four Pillar of Object orient programming?
2. What is abstraction?
3. Write the program exchange the value of two integer without using the third variable?
4. Write the program to remove the duplicate element from integer array?
5. Write the program the reverse the array without changing the position of special char? ex: “autom@t@ion” = “noitm@o@tum”
6. Write the program to find largest substring which can form the string after multiplication of substring?

# Zet Interview Questions

How do you ensure that automated tests run seamlessly across different environments in a CI/CD pipeline?

Can you discuss a scenario where you chose one programming language over another for a test automation project? What were the factors influencing your decision?

How do you handle test dependencies and test execution order in TestNG or JUnit?

Describe a scenario where you automated regression tests for a complex application. How did you prioritize test cases for regression?

What techniques do you use to optimize resource utilization, such as memory and CPU usage, during test execution?

Describe your approach to documenting automation framework architecture and guidelines for team members. How do you ensure documentation remains up-to-date?

Discuss your strategies for effectively communicating test results and findings to stakeholders with varying levels of technical expertise.

EPAM Interview Questions

1.Explain the automation framework

2.What unit testing framework are you using

3.What is difference in JUnit and TestNg

[4.How](http://4.how/)

can you rerun failed test cases

5.What CI/CD tool have you used

[6.Do](http://6.do/)

you know how to create a parametrized pipeline job

7.We need to save username of students, input username and print valid if it contains alphanumeric and invalid if it contains any special charcters or spaces or duplicate username. WAP in java or python to handle it

8.WAP to count occurrences of characters in a string

9.WAP to find the highest number from the array w/o using inbuilt method 10.WAP to reverse the string without using inbuilt method

11.What is difference between string and string buffer

12.What is difference between private, public and protected access modifiers 13.Collections framework heirarchy interfaces and their classes

14.What is difference between hashtable and hashset

15.What is difference between comparable and comparator

16.Explain the exception heirarchy

17.WAP to create a custom exception

18.What is an interface and an abstract class?

19.Why abstract class is allowed to have a constructor

20.Difference between final, finally and finalize?

21.Explain polymorphism

22.WAP to override a function

[23.Do](http://23.do/)

you know about Java 8

24.What is java streams and lambda expression

25.What is git rebase and get merge

26.When to use git rebase

27.What is functional interface

28.What is difference in status code 401 and 403

29.What is difference in oAuth 1.0 and oAuth2.0

30.WAP using RestAssured library and include assertions that you would use in a get or post call

31.What is the content type in oAuth2.0

32.Write a SQL query using join (two tables were given and their column names)

33.WAP to handle multiple windows in selenium

34.WAP to capture screenshots in selenium

[35.How](http://35.how/)

do you handle synchronisation in automation scripts

36.Write the syntax for fluent wait

37.WAP to read/write data from excel file

38.What are the different stages of an Automation test

39.What are different types of testing

40.What is difference between priority and severity

41.What are fields required to log a bug/defect

42.What is a test plan, what are the things included in it

43.Explain briefly different phases of SDLC