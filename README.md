# Discord Bot
 Authors: \<[Andrei Dimaano](https://github.com/andreidimaano)\> \<[Samuel Lagunas](https://github.com/slagu002)\>  \<[Jarvis Bui](https://github.com/jbui019)\>   

## Project Description

**Refactored under Professor Reem Ali's discretion**

Discord is an integral part of many students' lives. Whether we are playing video games, studying for classes, or participating in clubs, Discord makes it easier to communicate with eachother. We personally use Discord in order to communicate about classes, labs, and this project (how meta).

- Tech Stack:
  - Typescript: While design patterns are *possible* in Javascript, Typescript allows for encapsulation. The added types means that we can code in an object-oriented manner rather than functionally. 
  - DiscordJS : Useful API that will allow us to create the discord bot, DiscordC++ exists, however, the documentation is not as updated. 
  - Riot API : The Riot API allows us to get information about a user's last-played match. We will be fetching user data from the Riot API and sending an embedded message in Discord.
  - Kanye rest: An API that allows us to get random Kanye West quotes (explicit warning)
  - Jest : testing interface for javascript
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
## Class Diagram 
 ![Class Diagram](https://github.com/cs100/final-project-adima009-slagu002-jbui019/blob/master/CS100.png?raw=true)
 
  - Singleton
    - DiscordBot is a singleton class that declares the static method getInstance which returns the same instance of its own class.
    - The constructor is hidden from client to ensure one instance
    - Prefix is the prefix needed for commands (i.e "!!RIOT" the prefix is "!!")
    - client and connect() are handlers for connecting the bot wiht discord servers
    - setMessageHandler will accept messages from the server and parse the message into a command
    - singleton are global access which makes it perfect for handling the members currently studying or on break
    - DiscordBot has getters and setters that will allow the strategy pattern to access the current members on break or studying
    - Singleton contains CommandInvoker that which will parse the command and set the command to execute.
    
  - Command
    - Command declares interface for executing Riot or Pomodoro
    - Discord bot contains a reference to CommandInvoker
    - CommandInvoker asks commands to carry out request
    - Riot/Pomodoro defines binding between Receiver object and an action
    - implements execute by invoking operations on Receiver
    - Command has a parse function that takes in a Message Object and parses the correct command based on the message content
    - There are 5 commands: Help, Riot, Kanye, Pomodoro, Default
    - Help lists all the commands
    - Riot leverages the Riot API and displays stats from the most recent game of a player
    - Kanye leverages the Kanye West API and will display a random Kanye quote and image
    - Pomodoro is a study bot that allows users to set up a study/break timer
    - Default means that the command is invalid
    
 - Strategy
    - PomodoroReceiver maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
    - strategy interface declares the execute method the PomodoroReceiver uses to execute a strategy.
    - There are 4 concrete strategies : Long Long, Long Short, Short Long, Short Short. These strategies refer to Focus Time: Break Time, respectively. The times used for these pomodoro strategies are predetermined.
    - Pomodoro uutilizes the singleton DiscordBot to get access of the members studying or on break. The singleton pattern ensures a global instance of the member arrays which is useful because we need every strategy to have access to the members array
    - The strategy patterns take advantage of nested SetTimeout function in order to create the illusion of a timer.
  
  TLDR:
  Whenever a user in a discord server sends a message with the prefix: "!!" the bot will parse the message and execute the correct command. If the command is "!!Riot [summonerName]" then the discord bot will fetch statistics from a person's latest League Match". If the command is "!!Pomodoro [strategy]" the bot will parse the strategy and execute the respective strategy

 > ## Final deliverable
 > All group members will give a demo to the TA during lab time. The TA will check the demo and the project GitHub repository and ask a few questions to all the team members. 
 > Before the demo, you should do the following:
 > * Complete the sections below (i.e. Screenshots, Installation/Usage, Testing)
 > * Plan one more sprint (that you will not necessarily complete before the end of the quarter). Your In-progress and In-testing columns should be empty (you are not doing more work currently) but your TODO column should have a full sprint plan in it as you have done before. This should include any known bugs (there should be some) or new features you would like to add. These should appear as issues/cards on your Kanban board. 
 ## Screenshots
 > Screenshots of the input/output after running your application
 ## Installation/Usage
 *Instructions for Modification:*
 1. Install NodeJS
 2. Create a Discord Application from https://discord.com/developers/applications 
 3. Add the Discord Bot to a server
 4. Get a riot api key from https://developer.riotgames.com/
 5. Create a file called ".env" in the parent directory and add your discord_token and RIOT_API keys
 6. run yarn install
 7. run yarn dev
 8. type !! help in your server to see the rest of the commands
 
 *Instructions for face value installation*
 1. https://discord.com/oauth2/authorize?client_id=780286482828230656&scope=bot
 2. add issues whenever the riot command does not work (we need to reset the API key)
 
 ## Testing
 We created **100+** test cases for this project. We utilized jest, a testing framework for javascript to test our code. Because our actual application required Discord API libraries, we needed to create stubs, drivers, and complete mocks of the actual discord bot. In essence, our bot takes in user strings and output strings but with a little more flare and Discord API magic behind the scenes. Down to its core, the application can be broken down into just user strings and output strings. Thus, our mocks stripped down the Discord API magic and left behind just the essentials: async/await, strings, numbers, and objects. We were able to thorougly test our project for different user inputs, handle edge cages, and handle error messages. Finally, for integration testing, we manually tested user inputs in our Discord Server.
 
