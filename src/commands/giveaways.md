# Giveaways Commands

| Command        | Slash          | Description        |
| -------------- | -------------- | ------------------ |
| **!giveaway start \<#channel>** | **/giveaway start** | setup a new giveaway | 
| **!giveaway pause \<messageId>** | **/giveaway pause** |  pause a giveaway |
| **!giveaway resume \<messageId>** | **/giveaway resume** | resume a paused giveaway |
| **!giveaway end \<messageId>** | **/giveaway end** | end a giveaway
| **!giveaway reroll \<messageId>** | **/giveaway reroll** | reroll a giveaway
| **!giveaway list** | **/giveaway list** | list all active giveaways
|**!giveaway edit \<messageId>** | **/giveaway edit** | edit a giveaway |

::: info INFORMATION
The **!giveaway start \<#channel>** command sends an embed with a button in the selected channel, on click it will show a modal (**Form**).
:::

## Starting a new giveaway

The **form** will require a **duration**, **prize**, **winners**, **roleIds** and **hostId**.

| Option                 | Description                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| Duration               | The duration of the giveaway in the following format: **`1s/1h/1d/1w`**.        |
| Prize                  | The prize of the giveaway.                                                      |
| Winners                | Number of winners.                                                              |
| roleIds                | The roles that can join to the giveaway.                                        |
| hostId                 | The host of the giveaway (it will be the **interaction author** as default.)    |

## Editing Giveaways

Here are the 2 ways to edit the giveaways.

#### Via Text Command   

**`!giveaway edit <messageId>`**

Once you run the command the bot will send a message with a button, on click it will show a modal (**Form**).


#### Edit Options

| Option                 | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| Add Duration           | Thew new duration of the giveway in the following format: **`1s/1h/1d/1w`**.     |
| New Prize              | The new prize of the giveaway.                                                   |
| Winners                | Thew new number of winners of the giveaway.                                      |

#### Via Slash Command

**`/giveaway edit <messageId> <add_duration> <new_prize> <new_winners>`**

#### Edit Options

| Option                 | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| Add Duration           | Thew new duration of the giveway in the following format: **`1s/1h/1d/1w`**.     |
| New Prize              | The new prize of the giveaway.                                                   |
| Winners                | Thew new number of winners of the giveaway.                                      |
