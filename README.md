 > As you complete each section you **must** remove the prompt text. Every *turnin* of this project includes points for formatting of this README so keep it clean and keep it up to date. 
 > Prompt text is any lines beginning with "\<"
 > Replace anything between \<...\> with your project specifics and remove angle brackets. For example, you need to name your project and replace the header right below this line with that title (no angle brackets). 
# Discord Bot
 > Your author list below should include links to all members GitHub and should begin with a "\<" (remove existing author).
 
 > Authors: \<[Andrei Dimaano](https://github.com/andreidimaano)\> \<[Samuel Lagunas](https://github.com/slagu002)\>  \<[Jarvis Bui](https://github.com/jbui019)\>  
 
 > You will be forming a group of **THREE** students and work on an interesting project that you will propose yourself (in this `README.md` document). You can pick any project that you'd like, but it needs ot implement three design patterns. Each of the members in a group is expected to work on at least one design pattern and its test cases. You can, of course, help each other, but it needs to be clear who will be responsible for which pattern and for which general project features.
 
 > ## Expectations
 > * Incorporate **three** distinct design patterns, *two* of the design patterns need to be taught in this course:
 >   * Composite, Strategy, Abstract Factory, Visitor
 > * All three design patterns need to be linked together (it can't be three distinct projects)
 > * Your project should be implemented in C/C++. If you wish to choose anoher programming language (e.g. Java, Python), please discuss with your lab TA to obtain permission.
 > * You can incorporate additional technologies/tools but they must be approved (in writing) by the instructor or the TA.
 > * Each member of the group **must** be committing code regularly and make sure their code is correctly attributed to them. We will be checking attributions to determine if there was equal contribution to the project.

## Project Description

**Refactored under Professor Reem Ali's discretion**

Discord is an integral part of many students' lives. Whether we are playing video games, studying for classes, or participating in clubs, Discord makes it easier to communicate with eachother. We personally use Discord in order to communicate about classes, labs, and this project (how meta).

- Tech Stack:
  - Typescript: While design patterns are *possible* in Javascript, Typescript allows for encapsulation. The added types means that we can code in an object-oriented manner rather than functionally. 
  - DiscordJS : Useful API that will allow us to create the discord bot, DiscordC++ exists, however, the documentation is not as updated. 
  - Riot API : The Riot API allows us to get information about a user's last-played match. We will be fetching user data from the Riot API and sending an embedded message in Discord.
- I/O:
  - Input: Messages sent by users in a discord server - "!!Riot [summoner name]" "!!Pomodoro [time]" 
  - Output: Reply Messages sent by  the bot in a discord server

- 3 Design Patterns:
  - Singleton
    - Singleton is a creational design pattern that ensures one instance of a class while providing gloabl access point to this instance. There should be only one discord bot per server, otherwise we'd run into running commands more than once. The Discord API Key is stored as an environment variable, so we want to avoid having multiple instances of it as they would conflict with each other. 
  - Command
    -  Commands are integral to any discord bot. Almost all discord bots run on commands. Some common commands look like "!play [youtube link]" or "!skip". By using the command pattern, we will encapsulate two commands: "!!Riot" and "!!Pomodoro". Additionally, in the future, it will be easier in order to add more commands because new commands would inherit an abstract command.
  - Strategy
    - Strategy is a design pattern that lets me define a family of algorithms. There are several ways to run a pomodoro bot. We will implement three types of studying: long focus & short break, long focus & long break, short focus & short break, and short focus & last break. If we would like to implement more strategies, we could just add them as inheritors of the strategy interface.

 > ## Phase II
 > In addition to completing the "Class Diagram" section below, you will need to 
 > * Set up your GitHub project board as a Kanban board for the project. It should have columns that map roughly to 
 >   * Backlog, TODO, In progress, In testing, Done
 >   * You can change these or add more if you'd like, but we should be able to identify at least these.
 > * There is no requirement for automation in the project board but feel free to explore those options.
 > * Create an "Epic" (note) for each feature and each design pattern and assign them to the appropriate team member. Place these in the `Backlog` column
 > * Complete your first *sprint planning* meeting to plan out the next 7 days of work.
 >   * Create smaller development tasks as issues and assign them to team members. Place these in the `Backlog` column.
 >   * These cards should represent roughly 7 days worth of development time for your team, taking you until your first meeting with the TA
## Class Diagram
 > Include a class diagram(s) for each design pattern and a description of the diagram(s). This should be in sufficient detail that another group could pick up the project this point and successfully complete it. Use proper OMT notation (as discussed in the course slides). You may combine multiple design patterns into one diagram if you'd like, but it needs to be clear which portion of the diagram represents which design pattern (either in the diagram or in the description). 
    
 ![Class Diagram](https://github.com/cs100/final-project-adima009-slagu002-jbui019/blob/master/CS100.png?raw=true)
 
  - Singleton
    - DiscordBot is a singleton class that declares the static method getInstance which returns the same instance of its own class.
    - The constructor is hidden from client to ensure one instance
    - Prefix is the prefix needed for commands (i.e "!!RIOT" the prefix is "!!")
    - client and connect() are handlers for connecting the bot wiht discord servers
    - setMessageHandler will accept messages from the server and parse the message into a command
    
  - Command
    - Command declares interface for executing Riot or Pomodoro
    - Discord bot contains a reference to CommandInvoker
    - CommandInvoker asks commands to carry out request
    - Riot/Pomodoro defines binding between Receiver object and an action
    - implements execute by invoking operations on Receiver
    
 - Strategy
    - PomodoroReceiver maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
    - strategy interface declares the execute method the PomodoroReceiver uses to execute a strategy.
    - There are 4 concrete strategies : Long Long, Long Short, Short Long, Short Short. These strategies refer to Focus Time: Break Time, respectively. The times used for these pomodoro strategies are predetermined.
  
  TLDR:
  Whenever a user in a discord server sends a message with the prefix: "!!" the bot will parse the message and execute the correct command. If the command is "!!Riot [summonerName]" then the discord bot will fetch statistics from a person's latest League Match". If the command is "!!Pomodoro [strategy]" the bot will parse the strategy and execute the respective strategy
 
 > ## Phase III
 > You will need to schedule a check-in with the TA (during lab hours or office hours). Your entire team must be present. 
 > * Before the meeting you should perform a sprint plan like you did in Phase II
 > * In the meeting with your TA you will discuss: 
 >   - How effective your last sprint was (each member should talk about what they did)
 >   - Any tasks that did not get completed last sprint, and how you took them into consideration for this sprint
 >   - Any bugs you've identified and created issues for during the sprint. Do you plan on fixing them in the next sprint or are they lower priority?
 >   - What tasks you are planning for this next sprint.

 > ## Final deliverable
 > All group members will give a demo to the TA during lab time. The TA will check the demo and the project GitHub repository and ask a few questions to all the team members. 
 > Before the demo, you should do the following:
 > * Complete the sections below (i.e. Screenshots, Installation/Usage, Testing)
 > * Plan one more sprint (that you will not necessarily complete before the end of the quarter). Your In-progress and In-testing columns should be empty (you are not doing more work currently) but your TODO column should have a full sprint plan in it as you have done before. This should include any known bugs (there should be some) or new features you would like to add. These should appear as issues/cards on your Kanban board. 
 ## Screenshots
 > Screenshots of the input/output after running your application
 ## Installation/Usage
 > Instructions on installing and running your application
 ## Testing
 > How was your project tested/validated? If you used CI, you should have a "build passing" badge in this README.
 
