![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# PROJECT 3

**Your Full Stack React & Express Group Project**

- [OVERVIEW](#OVERVIEW)
  - [The MVP Requirements](#The-MVP-Requirements)
  - [The Post-MVP](#The-Post-MVP)
  - [The Presentation](#The-Presentation)
- [GETTING STARTED](#GETTING-STARTED)
  - [STEP 1. Read All Insturctions](#STEP-1-Read-All-Insturctions)
  - [STEP 2. Choose Your Tzar](#STEP-2-Choose-Your-Tzar)
    - [STEP 2.1. Initializing, For The Tzar](#STEP-21-Initializing-For-The-Tzar)
  - [STEP 3. Set Team Expectations](#STEP-3-Set-Team-Expectations)
  - [STEP 4. Pitch Your Idea](#STEP-4-Pitch-Your-Idea)
  - [STEP 5. Version Control](#STEP-5-Version-Control)
  - [STEP 6. Project Management](#STEP-6-Project-Management)
    - [STEP 6.1. Merging, For The Tzar](#STEP-61-Merging-For-The-Tzar)
  - [STEP 7. Get Hacking](#STEP-7-Get-Hacking)
    - [Getting Support](#Getting-Support)
- [RESOURCES](#RESOURCES)
  - [ERD Modeling](#ERD-Modeling)
  - [Templates](#Templates)
  - [Relevant Guides](#Relevant-Guides)
- [RECOMMENDATIONS](#RECOMMENDATIONS)
- [PLAGIARISM](#PLAGIARISM)

<br>

# OVERVIEW

You’ve already worked in small groups to accomplish various labs and exercises, but, this time, **we’re going to challenge you to work on a whole project with a small team.** You will partner with a group of your peers to collaboratively design and build a full stack express/react app.

**This is meant to push you.** Working in a team can be more challenging than working by yourself, but it is highly likely that you will find yourself working in a collaborative environment in your first job post-graduation. **It's vital that you gain experience now, working together, setting expectations, communicating with your colleagues, and navigating team dynamics.**

It is expected that team members will conduct themselves professionally throughout the project. If a group member's behavior undermines the effort of the group or violates the General Assembly Code of Conduct, they may be removed from the group. This will result in immediate disqualification for graduation. In light of this:

- Strive for communication that is **A**ctionable, **S**pecific, and **K**ind.
- Watch the [group bonding video](https://www.youtube.com/watch?v=J9OpTNk0hYc).
- Make it work, and make it awesome.

![teamwork makes the dream work](https://media.giphy.com/media/CvizJerMeqRTa/giphy.gif)

<br>

## The MVP Requirements

This project, like the others, will be a portfolio piece. For a portfolio piece to be complete, it **must** demonstrate an understanding of- and an ability to use- the tools and techniques introduced in this unit; it should be **functional with sufficient complexity**. This means that the project must meet the following requirements:

### Planning

- Have a **thoroughly** developed `README.md` file. (Refer below to _"Pitch Your Project Idea"_ for more.)
- Take time for each team member to discuss where they feel strongest and weakest, in terms of coding abilities.

### Collaboration

- Contribute equally.
- Have a solid understanding of the _entire_ project. (Even the features implemented by other team members.)
- Take time to pair program with teammates to reinforce learning.
- Be prepared to explain sections of code that were written by teammates.

### Client (Front End)

- Have a working, interactice **React** app, built using `create react app`.
  - Have at least 6 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Express API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Utilize Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.*
  - Perform `create`, `update`, and `delete` actions **when logged in**.

_* Unless it makes sense for that information to be restricted to particular users._

### Server (Back End)

- Have a **RESTful JSON API**.
  - Build an **Express** server, exposing RESTful JSON endpoints.
  - Use **Express Router** to organize your route endpoints.
  - Build a **PostgreSQL** database with at least 3 tables:
    - 1 user table
    - 2 other tables, of your choosing
    - There must be at least 1 pair of associated tables. (one to many, many to many)
  - Utilize **Sequelize** to define models for interacting with the database.
  - Implement Authentication using **bcrypt** and **JWT**.
  - Implement working generic controller actions for full-CRUD (`index`, `show`, `create`, `update`, `delete`) between the 2 non-user tables.

### Styling

- Be styled with CSS.
- Use flexbox (`display: flex`) or CSS Grid.
- Implement responsive design on 3 screen sizes (including desktop) using 2 media queries (tablet and mobile).

### Linting

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase` and `kebab-case` conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment

- Deploy the fully functional front-end via Surge.
- Deploy the back-end via Heroku.

### Procedural

- Initialize a **team git repo on Github**, with a link to your hosted project.
- Have _frequent_ commits from _every_ team member dating back to the _very beginning_ of the project.
- Use _effective_ and _safe_ branching and merging processes.

<br>

## The Post-MVP

Achieve your MVP with time to spare? Try aiming for some stretch goals. (The following are not mandatory for your group Project app.)

- Incorporate React component libraries for design and styling. (Instructors must sign off on this.)
- Add another resource to your Express database.
- Get input from a UX student on how to make your app have intuitive UI and design.

<br>

## The Presentation

Finally, to get you familiar with multi-person presentations, the last requirement:

- Present your app to your cohort.
- Each teammate should be responsible for an equal amount of the presentation.

<br>

# GETTING STARTED

## STEP 1. Read All Insturctions

_WE REALLY WILL KNOW, THIS ISN'T A JOKE_

<br>

## STEP 2. Choose Your Tzar

Pick one person on the team to be the "Git Tzar." This person will be responsible for managing your team's GitHub master branch, pushes, merges, and deployment. (Although one person is taking responsibility, you should all work together to support them and resolve any merge conflicts you run into.)

### STEP 2.1. Initializing, For The Tzar

You will start by creating your project repository on your **personal** GitHub. Make the repository public. Restrict master branch merges using a _majority consent_ merge requirement. Add each of your teammates as collaborators.

<br>

## STEP 3. Set Team Expectations

Your group should take at least 30 minutes to create a team expectations document. This should include:

1. **Timeline:** An overview of every day and when you will be hacking with your team.
2. **Teammates:** Who's on the team, and your personal strengths and weaknesses.
3. **Team Values:** Communication preferences, goals, values.
4. **Team Practices:** Naming conventions, git branching practices, express routes.

(Refer to the Resources section for the Group Project Team Expectations Template.)

<br>

## STEP 4. Pitch Your Idea

Before you start coding away, your team must meet with instructors to get your idea approved. We will have 12 minute pitches in which your group will present your ideas. **Your team must have your idea prepared and written up in the repository's ReadMe file, including all of the following items, to get approved.** 

1. **Title:** A working title for your app. (Feel free to have some fun with this.)
2. **Team Expectations**: A Google document or another markdown file covering timelines, communication preferences, code conventions, and more.
3. **Overview:** 4 to 5 sentences, in non-technical speak summarizing the features, functions, and goals.
4. **MVP:** Your goals for MVP, including a feature list for the minimum, need-to-have features of the app.
   1. **Goals:** Overarching goals for your team's project.
   2. **Libraries:** A list of all dependencies.
   3. **Client:** Wireframes, component heirarchy, component breakdown, and component estimates.
   4. **Server:** Data architecture and the ERD model. (Refer to the resources section for links to good ERD mapping sites.)
5. **Post-MVP:** Your goals for post-MVP, including nice-to-have features that you would like to implement once your MVP is complete.

(Refer to the Resources section below for the Full Stack Project README Template.)

<br>

## STEP 5. Version Control

Once your team's proposal is approved, confirm everyone on your team is running the same version of `node` and `npm` (`npm -v`, `node -v`). If you have differing versions, upgrade to the same versions.

<br>

## STEP 6. Project Management

- Create either a Trello board or a project board on your GitHub repo to prioritize and assign tasks. Common categories include `to do`, `in progress`, `done`, and/or `new`, `now`, `next`, and `later`.
  - Each group member should choose or be assigned tasks.
  - Break features into small, focused tasks. If a task can be made more granular, create a new task card on the project board describing the sub-tasks.
    - Pick a name for your team. Write it down in a fun typography and draw a cheet@h doing something (SFW, please) next to your team name. This is your team's logo. Upload this to your project file before you pitch.
  - As work is done on a particular task, or if a feature is complete, report to your Git Tzar to merge your branch and begin work on a new task.
    - Move the task card from `To do` to `In progress` to `Ready` when the feature branch can be merged into master.

### STEP 6.1. Merging, For The Tzar

(**This is VERY important to avoid merge conflicts. Pay attention.**)

- Once a teammate or you have finished a feature, tested for compatibility, and it is considered ready to merge, there are some important steps to follow:
  1. Create a pull request **from** the completed branch **to** the development or master branch.
  2. Have the required number of teammates approve the merge.
  3. Merge.
  4. Alert all teammates to a new merge and request they run a `git pull origin development` (or `master`) to get the most updated code on their local environment. (Merge conflicts are inevitable, but this makes sure they're small and manageable. DO THIS EVERY TIME YOUR MASTER IS UPDATED.)
  5. Before every subsequent merge, ensure your teammate has pulled the most updated team branch and resolved their conflicts.

<br>

## STEP 7. Get Hacking

Yay!

### Getting Support

When you experience issues with your code, once again, you will need to use the GitHub Issues tab. The Issue Ticket templates help you observe, research, and attempt to resolve your issue. If there's still no resolution, submit and slack the issue ticket your squad leader to reserve time to troubleshoot together.

<br>

# RESOURCES

## ERD Modeling

- [lucidchart](https://www.lucidchart.com/) This is a great tool for building ERDs.
- [draw.io](https://www.draw.io/) Another great tool for ERDs.
- [ERDPlus](https://erdplus.com/) Yet another great tool for ERDS.

## Templates

- [Front End Project README Template](https://github.com/mishakessler/course-template/blob/master/templates/Template_Project-README.md)
- [Full Stack Project README Template]()
- [Group Project Team Expectations Template](https://docs.google.com/document/d/1TuvOuy0UQ42KGOza9IAGs8pkPfmoIlVP4Vj6OnJNGG4/edit?usp=sharing)
- [Project Issue Ticket Template](https://github.com/mishakessler/course-template/blob/master/templates/Template_Project-Issue-Ticket.md)

## Relevant Guides

- [GitHub Docs: Create A New Repo](https://help.github.com/articles/create-a-repo/)
- [React Router Training Docs](https://reacttraining.com/react-router/)

<br>

# RECOMMENDATIONS

_(From previous survivors of project week.)_

> "This is a nice chance to make a portfolio piece, but you don't expect perfection. After graduating the SEI, no matter how great your project is now, you will want to return to it to improve and polish, before recruiters and potential employers see it."

> "Manage your expectations. Have a clear MVP goal and stick to it. If you're doing something that has nothing to do with your end goal, stop it. Also, try to just get your project working and improve it from there. Don't try to make it perfect the first time because you'll probably be unsuccessful. Get it working, make it better, repeat."

> "Mobile-first design, stick to your wireframes; it’s stressful to redo your whole CSS and lose precious project time."

> "Narrow your scope, especially if you’re chasing down a specific feature that you’ve never implemented.  Treat it as a chance to learn by doing and most importantly: build something you are happy to claim ownership of."

> "Don’t try too hard. Really. Do something that’s achievable and put cool graphics and styling on it."

# PLAGIARISM

Remember. We have a **zero tolerance policy** towards plagiarism. More on our plagiarism policy can be found in our course wiki's [plagiarism page](https://github.com/mishakessler/course-template/blob/master/guidelines/Guidelines_Plagiarism.md).
