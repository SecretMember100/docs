# Moderation Commands

## Text & Slash

| Command                             | Slash                  | Description                                              |
| ----------------------------------- | ---------------------- | -------------------------------------------------------- |
| **!warn `<member> [reason]`**       | **/warn**              | warns the specified member                               |
| **!mute `<member> [reason]`**       | **/mute**              | mutes the specified member                               |
| **!unmute `<member> [reason]`**     | **/unmute**            | unmutes the specified member                             |
| **!kick `<member> [reason]`**       | **/kick**              | kicks the specified member                               |
| **!softban `<member> [reason]`**    | **/softban**           | softban the specified member. Kicks and deletes messages |
| **!ban `<member> [reason]`**        | **/ban**               | ban the specified member                                 |
| **!nick set `<member>`**            | **/nick set**          | change a members nickname                                |
| **!nick reset `<member>`**          | **/nick reset**        | reset a members nickname                                 |
| **!purge `[amount]`**               | **/purge all**         | purge all messages                                       |
| **!purgeattach `[amount]`**         | **/purge attachments** | purge all messages with attachments                      |
| **!purgebots `[amount]`**           | **/purge bots**        | purge all bot messages                                   |
| **!purgelinks `[amount]`**          | **/purge links**       | purge all messages with links                            |
| **!purgetoken `<token> [amount]`**  | **/purge token**       | purge all messages containing the specified token        |
| **!purgeuser `<user> `[amount]**    | **/purge user**        | purge all messages from the specified user               |
| **!vmute `<member> [amount]`**      | **/voice mute**        | mute a member's voice                                    |
| **!vunmute `<member> [amount]`**    | **/voice unmute**      | unmute a muted member's voice                            |
| **!deafen `<member> [reason]`**     | **/voice deafen**      | deafen a member in voice channel                         |
| **!undeafen `<member> [reason]`**   | **/voice undeafen**    | undeafen a deafened member in voice channel              |
| **!move `<member> [reason]`**       | **/voice move**        | move a member from one voice channel to another          |
| **!disconnect `<member> [reason]`** | **/voice kick**        | kick a member from voice channel                         |


## Only Slash

### Channels Commands

| Slash                     | Option           | Description                   |
| ------------------------- | ---------------- | ----------------------------- |
| **/channel lock**         | **`<channel>`**  | lock the selected channel     |
| **/channel unlock**       | **`<channel>`**  | unlock the selected channel   |
| **/channel lockall**      | **`<channel>`**  | lock all the channels         |
| **/channel unlockall**    | **`<channel>`**  | unlock all the channels       |


### Roles Commands

| Slash                     | Option                 | Description
| ------------------------- | ---------------------- | -
| **/role give**            | **`<role> <user>`**    | Give selected role to a user (yourself if **blank**).
| **/role remove**          | **`<role> <user>`**    | Remove selected role to a user (yourself if **blank**).
| **/role give-all**        | **`<role>`**           | Give a role to **everyone** in the server.
| **/role remove-all**     | **`<role>`**           | Remove a role from **everyone** in the server.


::: warning
All of these action will be logged in **moderation logs** channel if **enabled**.
:::
