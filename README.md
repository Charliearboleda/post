# post [(link)](https://post-ga.herokuapp.com/)

## Authors
- Ahmed Osman | [LinkedIn](https://www.linkedin.com/in/aosman-/) | [GitHub](https://github.com/a-osm)
- Charlie Arboleda | [LinkedIn](https://www.linkedin.com/in/charliearboleda/) | [GitHub](https://github.com/Charliearboleda)
- Ju Chan (Josh) Kim | [LinkedIn](https://www.linkedin.com/in/jc-k91/) | [GitHub](https://github.com/jc-k91)


## Approach
#### Picking a Project Idea
- Our main basis for selecting a project was to create a category of app that none of us had experience building. This was really difficult because we were at the end of the course and we had created a variety of different types of apps. We went with a social media app because none of us had implemented friend/follower functionality into any of our projects before.

#### Splitting the Work
- We spent the first day pair-programming both our front- and back-end setup, then eventually split up into separate tasks.
- Charlie implemented authentication with Firebase, react-router, and some Context (thank you, [Web Dev Simplified](https://www.youtube.com/watch?v=PKwu15ldZ7k))
- Ahmed set up the basic components and implemented the file upload functionality.
- Josh focused on keeping the formatting of code consistent throughout the codebase and organized the file structure.

#### Data Structure
- We set up our data to be a series of one-to-many relationships (users -> posts -> comments), which was very simple to conceptualize. Our challenge was to implement custom queries via our Django backend, which we had never done before.

## User Stories
#### Core
- As a user, I should be able to log into my own account.
- As a user, I should be able to see different 'pages' depending on what I click on.
- As a user, I should be able to create a post so I can show off my perfect life.
- As a user, I should be able to edit or delete a post.
- As a user, I should be able to upload images from my device.
- As a user, I should be able to search for other users.
- As a user, I should be able to follow and be followed by other users.
- As a user, I should be able to post comments under posts.
- ~~As a user, I should be able to go to a single post view to see all post details and comments.~~

#### Stretch
- As a user, I should be able to change my account settings.
- As a user, I should be able to set my sharing settings (public, friends, only self)
- As a user, there should be validation using the Luhn algorithm when I enter my credit card info for no reason.

## Technologies Used
#### Frontend
- React
- React Router (view management)
- React Context (state management)

#### Backend
- Django
- Cloudinary (photo uploads)
- Firebase (authentication)

#### Project management, hosting, and deployment
- [GitHub](https://github.com) (version control)
- [Trello](https://trello.com) (project management)
- [Heroku](https://heroku.com) with Heroku Postgres (hosting/deployment)

#### Misc


## Unsolved Problems
- Firebase was throwing an `invalid API key` error and we had absolutely 0 idea as to what could be wrong. We double and triple checked the API key, how we were calling the API key, how we were calling the API with the API key, and everything was right, but it still wasn't working. By chance, Charlie turned off his computer for the first time in forever on a whim when attending a family function, and when he came back and booted up his computer, the error disappeared. Ahmed and Josh also tried rebooting our computers and it worked. We were going to put this in the solved problems section, but was it *really* solved??????????
- At this point (Sunday night), we still have no idea how to make custom queries to our backend (i.e. using psql filters, etc. such as `JOIN` and `ANY()`), meaning we need to run multiple calls and filter out the response in the frontend. It's ugly, but it works.
- React Bootstrap is weird.
- Started getting used to using Context, but the components don't re-render when state is set to something from context, even if that 'something' in the context does update.

## Solved Problems
- The tutorial we used for Firebase authentication (along with some other walk-throughs) used functional components, and we had no idea what was going on at first. We did a bunch of research and figured out how functional components work in general, along with some basic hooks (`useState()` and `useEffect()` have been particularly clutch)
- We struggled with updating our models when we added/removed fields. Migrate wouldn't change anything, but it would still say the 'ghost' field is required, throwing an error. We realized that this was just a problem with us not understanding the workings of Django, and was eventually solved by adding the field to the model's serializer. 🤦‍♂️
- Cloudinary would take too long to upload a photo and return the URL for us to set the state to post into our backend. Solved the problem by adding a `useEffect()` hook to listen for a change on state.image, which triggers the POST call to our backend.

#### Reflection Section
