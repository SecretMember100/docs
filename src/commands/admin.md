# Admin Commands

::: danger
These commands can be only be used by members who have **ManageServer** permission
:::


## Set Prefix

* **Description**: Set bot's prefix
* **Usage**: `!setprefix <newPrefix>`

## Automod Configuration

| Name                                     |  Description                                                   |
|----------------------------------------  | ---------------------------------------------------------------|
| **!automod status**                      | view configuration status                                      |
| **!automod strikes `<amount>`**          | Set the maximum number of strikes before taking an action      |
| **!automod action `<kick\|mute\|ban>`**  | Set the action to be performed after receiving maximum strikes |
| **!automod debug `<on\|off>`**           | turns on automod for messages sent by admins and moderators    |
| **!automod whitelist**                   | view all whitelisted channels (all are whitelisted by default) |
| **!automod whitelistadd `<channel>`**    | add a channel to the whitelist                                 |
| **!automod whitelistremove `<channel>`** | remove a channel from the whitelist                            |

::: warning
By default, Auto moderation events are ignored for moderatos since they are assumed to be channel/server moderators

#### Ignored Permissions: 

**KickMembers**, **BanMembers**, **ManageGuild**, **ManageMessages**


Run `!automodoconfig debug on` to disable this.
:::

## Starboard
 
| Slash Command                              | Description                                           |
|------------------------------------------  | ---------------------------------------------------   |
| **/starboard set `<channel> <starnumber>`** | set the starboard channel and starCount for starboard |
| **/starboard reset**                       | Reset the starboard data                              |


## Embed Builder 

**`/embed <channel>`** Will sent a message with a button in the selected channel, on click it will show a modal (**Form**).

It wil require an **Embed Title**, **Embed Author**, **Embed Description**, **Embed Color (HEX)** and **Embed Footer**.

### What about fields?

Don't worry, after you fill the modal the bot will show buttons to add and remove fields, once you're done click on the **Done** button.

## Verify System

**`/verify <channel> <role>`** Wil sent an embed with a button in the selected channel, on click it will give the member the selected role.

## Reaction Roles Buttons

Here's the configuration of the **Reaction Roles Buttons**.

### Creating a new panel

**`/roles-menu create <name> <description> <access-role>`**

| Option                              | Description                                                |
| ----------------------------------- | ---------------------------------------------------------- |
| **Name**                            | The title to be displayed on the button panel.             |
| **Description**                     | The description to be displayed on the button panel.       |
| **Access-Role**                     | The role that can use the button panel (leave it blank for **@everyone**)

### Adding a new role to the button panel

**`/roles-menu add <panel-id> <role> <emoji>`**
  
| Option                              | Description                                                         |
| ----------------------------------- | ------------------------------------------------------------------- |
| **Panel-ID**                        | The ID of the panel that you wish to add a new role.                |
| **Role**                            | The role to add to the button panel.                                |
| **Emoji**                           | The emoji to the button role (it will **randomize** if **blank**).  |

#### Don't have the Panel-ID?

Don't worry! Run **`/roles-menu list`** and look up for the panel that you wish to edit.


### Removing a role from a button panel

**`/roles-menu remove <panel-id> <role>`**

| Option                              | Description                                                         |
| ----------------------------------- | ------------------------------------------------------------------- |
| **Panel-ID**                        | The ID of the panel that you wish to remove a role.                 |
| **Role**                            | The role to remove from the button panel.                           |

#### Don't have the Panel-ID?

Don't worry! Run **`/roles-menu list`** and look up for the panel that you wish to edit.


### Deleting a button panel

**`/roles-menu delete <panel-id>`**

| Option                              | Description                                                         |
| ----------------------------------- | ------------------------------------------------------------------- |
| **Panel-ID**                        | The ID of the panel that you wish to delete.                        |

#### Don't have the Panel-ID?

Don't worry! Run **`/roles-menu list`** and look up for the panel that you wish to delete.

### How do I send a button panel?

**`/roles-menu panel`**

| Option                              | Description                                                         |
| ----------------------------------- | ------------------------------------------------------------------- |
| **Panel-ID**                        | The ID of the panel that you wish to send.                          |
| **Channel**                         | Channel where the button panel will be send (it will send in the **current** channel if **blank**)                                                                           |

### Where I find the ID's of my button panels?

Run **`/roles-menu list`**


## Autodelete

| Name                                   | Description                                             |
|----------------------------------------|---------------------------------------------------------|
| **!autodelete attachments `on/off`**   | Allow or disallow attachments in messages               |
| **!autodelete invites `on/off`**       | Allow or disallow sending discord invites in messages   |
| **!autodelete links `on/off`**         | Allow or disallow sending links in messages             |
| **!autodelete maxlines `number`**      | Sets maximum lines allowed per message [0 to disable]   |

::: warning
Each time a member tries to break the automated rule, he/she **receives a strike**. After receiving the maximum number of strikes (default 5), the moderation action (default **TIMEOUT**) is performed on them
:::

## Anti Commands

Here are all the commands to avoid links,spam & mass mentions

| Name                                          | Description
|-----------------------------------------------|-------------------------------------------------------|
| **!anti ghostping `<on/off>`**                | logs ghost mentions in the server (Requires `/modlog` channel to be setup)                                                                                    |
| **!anti spam `<on/off>`**                     | Stops users from spamming messages.                   |
| **!anti massmention `<on/off>` [threshold]**  | Stops users from mass mentioning                      |

## Counter Channels

* **Usage**: `!counter <counter_type> <name>`
* **Available counters** **types**
  * **`USERS`**: counts the total server member count (members + bots)
  * **`MEMBERS`**: counts the total member count
  * **`BOTS`**: counts the total number of bots

## Max Warn

* **!maxwarn limit `<amount>`**: set max warnings a member can receive before taking an action
* **!maxwarn action `<timeout|kick|ban>`**: set the action to be performed after receiving maximum warnings

## Flag Translations

Enabling this feature will allow members to simply react to any message with a country flag emoji, translating that message content to regional language.

* **Description**: configure flag translation in the server
* **Usage**: `!flagtr <on|off>`

## Moderation Logging

* **Description**: enable or disable moderation logs
* **Usage**: `!modlog <channel|off>`

::: warning 
Moderation logging enable logging of all **moderation actions** and **automod events**
:::

## Stats System

* **Description**: configure the stats system in the server
* **Usage**: `!statstracking <on|off>`

## XP system 
| Command | Description |
| ------- | ----------- |
| **!xp message `<new-message>`** | set custom level up message |
| **!xp channel `<#channel\|off>`** | set the channel to send level up messages to

## Greeting

Here are all `welcome/farewell` commands and **Allowed Content Replacements**

### Welcome

| Command                             | Description                                             |
| ------------------------------------|---------------------------------------------------------|
| **!welcome status `<on/off>`**      | enable or disable welcome message                       |
| **!welcome channel `<#channel>`**   | configure channel where welcome messages must be sent   |
| **!welcome preview**                | send a welcome preview                                  |
| **!welcome desc `<content>`**       | set welcome embed description                           |
| **!welcome footer `<content>`**     | set welcome embed footer                                |
| **!welcome thumbnail `<on/off>`**   | enable or disable welcome message thumbnail             |
| **!welcome color `<#hex>`**         | set welcome embed color                                 |
| **!welcome image `<url>`**          | set welcome image at the bottom of the embed            |

### Farewell

| Command                             | Description                                             |
| ------------------------------------|---------------------------------------------------------|
| **!farewell status `<on/off>`**     | enable or disable farewell message                      |
| **!farewell channel `<#channel>`**  | configure channel where farewell messages must be sent  |
| **!farewell preview**               | send a welcome preview                                  |
| **!farewell desc `<content>`**      | set farewell embed description                          |
| **!farewell footer `<content>`**    | set farewell embed footer                               |
| **!farewell thumbnail `<on/off>`**  | enable or disable farewell message thumbnail            |
| **!farewell color `<#hex>`**        | set farewell embed color                                |
| **!farewell image `<url>`**         | set farewell image at the bottom of the embed           |

::: tip Allowed Content Replacements
* \n : New Line&#x20;
* {server} : Server Name&#x20;
* {count} : Server member count&#x20;
* {member:name} : Member Name&#x20;
* {member:tag} : Member Tag&#x20;
* {inviter:name} : Inviter Name&#x20;
* {inviter:tag} : Inviter Tag&#x20;
* {invites} : Inviter Invites
:::

## Reaction Roles

### Create Reaction Role

* **Usage**: !addrr <#channel> \<messageId> \<role> \<emote>
* **Description**: setup reaction role for the specified message

### Remove Reaction Roles

* **Usage**: !removerr <#channel> \<messageId>
* **Description**: remove configured reaction for the specified message
