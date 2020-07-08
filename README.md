# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Project Wayfarer

## Brief

We have been commissioned to build a travel community, code-named **Project Wayfarer** for now, for users to share tips (AKA posts) about their favorite locations around the world.

## Client Contract

The client has provided basic wireframes and user stories. In some cases, these requirements may be vague or incomplete.

* [Wireframes](./wireframes.png)
* [User Stories](./user-stories.md)

## Process

The client contract consists of three core sprints and four bonus sprints. Each sprint contains a set of user stories. You may not complete all of the sprints within the time period, and that's ok. **The goal is to gain experience working on a development project in a group while navigating a client's feature list.**

**IMPORTANT:** You may not begin a new sprint or start on a bonus without client approval.

You will work in groups of 2, and we expect you to **pair program** for the majority of the time you're writing code.

During morning scrums and in smaller check-ins throughout the day, clearly communicate your current status and next steps to your teammates. Use a kanban-style scrum board such as **Trello** to organize tasks ([example Trello board](https://trello.com/b/JPdt327u/vagabond)).

Commit changes at least once for each user story. Put effort into your **design**. Use a CSS framework (e.g. Bootstrap or Materialize), partials, and some custom CSS or Sass/Less.

Work as **[git collaborators](./git-collaboration-workflow.md), build on feature branches, and submit pull requests for approval and merging**.

After you have completed your project, **deploy to heroku** to get practice getting the app online. The earlier you resolve deployment, the easier it will be to fix bugs.

**Refactor** your code after each sprint, considering:

* Indentation
* Readability/clarity
* Naming
* Organization
* Commenting
* DRYness

## Set up Backend App

Use this [doc](./BACKEND.md) to go over step by step process of setting up your backend app. There are multiple APIs given to you. You don't have to use all the APIs some of them return redundant information. Use whatever API you need to build your frontend successfully.

## Questions to Ask Yourselves

1. **Are you all clear about what the client wants?** Identify vague areas. Seek clarification in any cases where you feel less confident about your interpretation of the client's vision.

2. **What will the UX/UI flow be?** Hammer out any areas of ambiguity in the wireframes

3. **What are the major milestones or components that you need to complete?** How can these be turned into tasks that group members can complete in pairs? Where do these milestones overlap and how will those related tasks be managed?

4. **What milestones are you and your group members interested in working on?** How can you effectively delegate the work into pairs so that each group member is interested, challenged, and productive?


<details>
<summary>TEAMS</summary>
<br>
April-Dan
Fenton-Jeremy
Christy-Amber
Tracy-Haley
Asheley-Mario
  
 </details>


## Presentation

Each group will present their project on **07/15/2020 Wednesday** starting at **11:00am** for 10 minutes.

Each member of your group should speak for equal parts during your presentation and mention which parts of the project they worked on.

**Your presentation should include:**

* Tour (demo) of your app, ideally deployed on heroku (but not required).
* How did your group approach the requirements? (mention anything unique or creative your group chose to do)
* What was easier than you thought? What was more challenging?
* What is a lesson you will carry forward to working on your next project?
* Shout outs for fellow students!

## Evaluation

You will be evaluated on the following measures:

1. Project workflow
  - frequent commits with good commit messages
  - cooperative group work including majority of pair programing
  - effective use of branches
  - planning to avoid excessive merge conflicts
  - deliberate approach - routeside-in, logical progress from skateboard to car
  - the code is your original code
2. Readability
  - to what degree does your app fulfill the user stories?
  - code is clean
  - follows good naming conventions
  - code is free of obvious errors and bugs
  - code demonstrates good problem solving
  - code is DRY
3. Technical requirements
  - users are authenticated
  - full CRUD for posts
  - custom HTML, CSS, and JavaScript (using the asset pipeline)
  - users are authorized
  - commenting (optional)
