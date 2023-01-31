# Suggestions

## Suggest
**!suggest `<suggestion>`** 

::: warning
This command can only be used every 20 seconds.
:::

::: danger
These below commands can only be used by members who have **ManageServer** permission.
::: 

## Suggestion Configuration

| Command | Description | 
| ---------| ---------------- |
| **!suggestion status `<on\|off>`** | Enable or disable the suggestion system |
| **!suggestion channel `<#channel>`** | Setup the Channel (add off if you want to **disable it** | 
| **!suggestion appch `<#channel>`** | Send approved suggestions to a channel |
| **!suggestion rejch `<#channel>`** | Send rejected suggestions to a channel | 
| **!suggestion approve `<channel> <messageId> <reason>`** | Approves a suggestion | 
| **!suggestion reject `<channel> <messageId> <reason>`** | Reject a suggestion | 
| **suggestion staffadd `<roleId>`** | Add a staff role to approve/reject/delete suggestions |
| **!suggestion staffremove `<roleId>`** | Remove a staff role to approve/reject/delete suggestions |

::: info
When clicking on the approve/reject/delete suggestion buttons, you will be asked in a **modal** to give a reason.
:::
