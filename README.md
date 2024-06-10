# fe-interview
How I would interview someone for a React position:

Before interview:
- Make sure to check out tanstack query and styled components if you are not already familiar with them.
- If the person is good the examples in the code will be enough to do something

1. Environment variables + conditional rendering
- Add an .env variable called VITE_REACT_APP_HIDE_WIP_FEATURES
- The header has 3 items: Header item 1, Header item 2, Header item 3
- I want you to render Header item 3 only if the variable is set to false
- Test both cases when you are done

2. Route protection

- There is a route /hide that shows a "Hide me screen"
- I want you to protect this route so that you get redirected to / (home route) if you try to access it while
VITE_REACT_APP_HIDE_WIP_FEATURES is set to true. 
- If this variable is set to false, you should be able to access the route as normal
- Test both cases when you are done

3. Component styling using styled components

- There is a component called Typography being used in Header.tsx
- I want you to use styled components to style this component with the following styles:
  - font-size: 30px
  - color: red
- Use this styled version of the component on Header item 2 to prove it works
- Leave the rest as they are

4. Extend existing component

- Look at Typography.tsx
- You will be able to see it supports adding a custom fontWeight
- I want you to extend this component to also support a custom fontSize.
- The default font size should be 16px, but you should be able to set it to anything you want and it should be
optional
- To prove this is working increase the font size of header item 1 to 20px by using the new prop on the component

5. Create new component

- In pages/Users.tsx there is some functionality which loads a list of users
- The code if (isLoading || !data) return null is not very user-friendly
- I want you create a new component called Loader.tsx which will show a loading gif when isLoading is true
- In /assets there is a loading.gif you can use to do this, or you can use any other gif or css animation you want

6. Responsiveness

- You can see that the list of user tiles is not responsive at all
- First I want you to adjust the code so they are responsive and look okay on most device sizes
- After we finish and test this then I want you to make it so only one user tile is showed per row on mobile devices
- We can use breakpoint 500px for this for testing purposes

7. Extend existing interface, component

We are using this page to show a list of users: https://dummyjson.com/docs/users

fetch('http://dummyjson.com/users/search?q=John')
.then(res => res.json())
.then(console.log);

- The response type is visible on this page, or you can check network console
- We currently show first name and last name of the user
- We also show the age of the user
- I want you to add support to our interfaces for "email": "emily.johnson@x.dummyjson.com",
- I then want you to show this in the UserTile component, so we get that for each user too like we get the 
rest of the data

8. New interface, new api functionality

We are using this page to show a list of users: https://dummyjson.com/docs/users

fetch('http://dummyjson.com/users/search?q=John')
.then(res => res.json())
.then(console.log);

- If you noticed we currently have a search that doesn't do anything
- You will need to save the state of the search term somehow
- I want you to implement this?q={search_value} logic into our API layer so that we can search for specific users
- You will need to create an interface for the payload
- You will need to add support for this in the API layer
- You will need to add support for this in the hooks (tanstack-query) layer
- You will need to connect the search input in the Users.tsx page to this functionality
- Bonus: how can you make sure we do this search only when you stop typing into the input?

9. Form validation

- Go to /form
- There is a form there
- I want you to add validation to this form
- Email should only accept email
- Password should be at least 8 characters long
- Login button should be disabled and not click-able until both fields have any kind of value
- When you click on login both fields should be validated
- If the fields are not valid you should show an error message above the login button, you can use the typography component for this and style it to have red font color
- If the fields are both valid you should be redirected to / (home route)
- Bonus: how can you make sure the form is validated only when you click on the login button?
- Bonus: the error message should go away when you start typing again

10. New page / interface / api functionality

- Based on the dummy json endpoints I want you to create a new page called /user/:id
- This page should show the user details for the user with the id you pass in the url
- You can use the existing User interface for this
- You will need to create a new interface for the response of this endpoint
- You will need to create a new API call for this endpoint
- You will need to create a new hook for this endpoint
- You will need to create a new page for this endpoint
- You will need to create a new route for this endpoint
- When you click on a user from the UserTile you should be redirected to users/its_id