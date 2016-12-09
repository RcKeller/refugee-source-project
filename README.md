# Refugee Resource Project

Our goal - reverse the process related to gathering information about refugee services in the State of Washington.
* Instead of having users reach *out* for information - learn about the user. Bring the information to them
* Reduce information overload. Bring jargon to plain language. Have TL;DR's and accessible language.
* Develop a taxonomy for refugee resources, turn it into a services directory, and provide the user with "just enough" of a view that is relevant for their situation.

---------------------------

## Milestones / Timeline

We have less than 10 days left.

* `Tues, Nov 29: Group Meeting (UX Designers, Keller)`
    - Meet and discuss the feasibility of current wireframes, data structuring, and interaction design. Leave with concrete ideas for where the project is going.
    
* `Wed, Nov 30: Complete Prototype (Keller)`
    - Complete a prototype and the back-end structure for our website. It does not have to be fully functional, but data flow should be set up so components can begin to be added/updated/removed. This website is build with multiple languages in mind, meaning the structures will have to support multiple languages.
    
* `Fri, Dec 2: Complete Data Collection (Miranda)`
    - We will need all of our data in so we can begin translation. Data must also be *formatted* appropriately in a spreadsheet without whitespace, with consistent conventions. This data needs to be standardized with common categories so that we can process the data programmatically. There will be 4 major categories: Resettlement (Housing, Employment, Education/ESL), Immigration, Healthcare, and Food. These are subject to change depending on the final data set and distribution, but the idea is we want to collect data about ALL services a support center can provide, but also the *primary* service so they can be categorized/sorted. A food kitchen may also provide housing, but they are primarily food... etc.

* `Mon, Dec 5: Working Website Draft Due (Keller)`
    - A fully-functional website must be ready by now. Features and interactions that are not completed by now will have to be cut and design will have to adapt accordingly. By this date, we may not have a pretty website, but should have a stable one, with all data rendered, ready to deploy.

* `Tues, Dec 6: UX / Development Meeting and Finalization (Keller, UX Designers)`
    - I will need to meet with the rest of the group to go over the data set, massage the data, and work with UX designers to improve site design and theming. Also on tuesday:

* `Tues, Dec 6: Translations Due (Miranda, McKaulay, Sarah et al.)`
    - By now, not only should the primary data set be prepared to ship, but our data must be translated into all the different languages we plan to support. Note, there is a hierarchy: English and Arabic are top priorities, and we will descend in priority depending on how many refugees speak which languages per user research.

* `Wed, Dec 7: Pre-Presentation Meeting (All)`
    - By now, everything should be completed and we will prepare our presentation. While the presentation should be in symposium format, we can assume because there is a presentation *award* that there will be a pre-prepared component to this assignment.

* Thurs, Dec 8: Project DUE (ALL)

---------------------------
## Group Members

* Ryan Keller (info343, info200)- Software Engineer, Full Stack
* Yuxing Wu (info343) - Front-End Engineer & User Experience
* Muhammad Hussain (info343, info200)- Software Engineer, Front-End & UX
* Ali Shubber (info343)- Front-End & User Research

* McKaulay Kolakowski (info200)- Project Manager
* Sarah Phillips (info200)- User Experience 
* Miranda Lin (info200)- User Research & Data

---------------------------

### Git Basics

Clone this repo:

    git clone https://github.com/RcKeller/refugee-source-project.git

Once you are in the refugee-source-project folder, you can start using git.

Pull any recent changes:

    git pull --rebase origin master

Add and push changes:

    git status
    git add .
    git commit -m "COMMIT MESSAGE HERE"

To close an issue (task that has been cut to you), just add "close #(number)" to your commit message, e.g. "Added file X, close #5"

---------------------------

### Development Details
--Keller

Let's keep it short and simple. The brass tacks about our website:

* Developed and rendered with React.JS, which allows you to render your webpage 'components' on a virtual page, meaning there is almost *no html or css*.
* Firebase is our backend (as a service, brought to you by google). It stores all of our data in a JSON object, which is basically a gigantic tree structure.
    - See the "FirebaseBackup.json" file for snapshots of what I'm doing with the backend structure.
* React uses a one-way data flow, where the "state" (values, status, whatever you'd call it) can be passed as "properties" to child components. Properties are those things you define with stuff like `href="blah"`. You can pass functions as props, and when invoked they update the parent.
* We are using reactfire and "mixins", which, when combined, allow us to bake-in event listeners that will update React data when Firebase changes.
    - When the state of a React component changes, it triggers a few functions to re-render the component (although, it ends up only re-rendering the difference between the user view and abstraction layer).
    - Remember that firebase is a tree structure. However, we can actually bind our firebase structures as either objects or arrays. Page content is bound as objects (so DO NOT change the namespaces on firebase), whereas directory listings are bound as arrays for rapid iteration.
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), which is basically a pre-built tool for initializing "webpack", where the real magic is. NPM, Node package Manager, is how we install and import third party components. The package.json in our project root contains basic dependancy information for our project.
* We're using material design specifications, which are the specifications for Google's modern applications post-2014 (Gmail, Android OS, Hangouts, so on...). It's minimalistic, directs the attention of users, and reduces visual noise. The theory behind material design is it's grounded in "tactile reality", but with the possibility of magic to happen. So you have paper, cards, buttons, but to the furthest extent possible, we want to make our interactions organic, as if our page was created from real parts. This is why we don't have sliders, etc. 


---------------------------