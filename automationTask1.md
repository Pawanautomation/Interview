I'll provide several realistic automation tasks that are commonly asked in interviews, using public websites. These tasks are designed to be completed within 30 minutes and test various aspects of Playwright and TypeScript skills:

1. E-commerce Task (Amazon/Target):
- Navigate to amazon.com
- Search for "wireless headphones"
- Filter by 4+ stars and specific price range ($50-$100)
- Add the third item to cart
- Verify cart total and item details
- Remove item from cart

2. Flight Booking Flow (Booking.com):
- Visit booking.com
- Search for flights between two major cities
- Select specific dates (2 weeks from current date)
- Filter for direct flights only
- Sort by price
- Verify the first three flight prices are in ascending order

3. Weather Comparison (Weather.com):
- Navigate to weather.com
- Search and capture weather details for three different cities
- Compare and verify temperature differences
- Assert if it's raining in any of the cities
- Verify 5-day forecast is displayed for each city

4. Social Media Login (Twitter/X):
- Navigate to Twitter login page
- Attempt login with invalid credentials
- Verify error message
- Validate password field masking
- Check 'Remember me' checkbox functionality
- Verify 'Forgot Password' link

5. News Article Test (CNN/BBC):
- Visit news website
- Navigate to technology section
- Verify article count on page
- Capture all article headlines
- Verify each headline has a working link
- Sort articles by date if available

6. Form Validation (any public form):
- Visit a registration form
- Test all required fields validation
- Submit with empty fields
- Verify error messages
- Test email format validation
- Test password strength requirements

7. API + UI Combination (GitHub):
- Navigate to GitHub
- Search for a specific repository
- Verify repository details via UI
- Compare with API response
- Verify star count matches between UI and API
- Check repository description

8. Calendar Interaction:
- Navigate to any public calendar app
- Create new event for next week
- Verify event creation
- Edit event time
- Delete event
- Verify event removal

9. Multi-tab Handling:
- Start on any e-commerce site
- Open product in new tab
- Compare prices between tabs
- Switch between tabs
- Close specific tab
- Verify correct tab remains active

10. Dynamic Content Loading:
- Visit an infinite scroll page (like Reddit)
- Scroll down to load more content
- Verify new content loads
- Count total items loaded
- Verify unique items
- Return to top of page

11.
Open the webpage https://bonigarcia.dev/selenium-webdriver-java/infinite-scroll.html

Find the count of paras in the page. Use Assert to match with expected count

Now scroll down till 5 times and each time get the para count 

So after 5 times scrolling , the para count should be 20 added each time

These tasks test important automation concepts like:
- Page navigation and interaction
- Dynamic element handling
- Data validation
- State management
- Error handling
- Asynchronous operations
- Complex user flows
- API integration
- Cross-browser testing capabilities
- Element location strategies

Each task should be implemented following the AAA (Arrange-Act-Assert) pattern as mentioned. They can be modified to be easier or more complex depending on the interview level.