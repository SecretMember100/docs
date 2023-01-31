export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam {
  avatar: string
  name: string
  title: string
  links?: object
}

export const teamMembers: CoreTeam[] = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/852738368487948288/eead991abfcd8540699ff80c1c336d5a.png?size=1024',
    name: 'Adeeb',
    title: 'Owner & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Adeeb9765' },
      { icon: 'discord', link: 'https://discord.com/users/852738368487948288' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/852736379229700157/bf1b254eb5fa6cb2c81181d4f72a75a2.png?size=1024',
    name: 'VIRAT G1',
    title: 'Co Owner',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/852736379229700157' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/737459216175857686/07eaa6bb5381107850279eeac3ed9ebe.png?size=256',
    name: 'Elon',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Elon10' },
      { icon: 'discord', link: 'https://discord.com/users/737459216175857686' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/250807464432369665/d8f1fa0cf80e709a21c261d5035fbbd2.png?size=2048',
    name: 'EpicGamer Girl',
    title: 'Graphics & Administration',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/250807464432369665' }
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/885949780306575371/77d475119654a7c582ede7f9a7c98aa0.png?size=2048',
    name: 'Skäl dé Morder',
    title: "Graphics",
    links: [
      { icon: 'discord', link: 'https://discord.com/users/885949780306575371' }
    ]
  },
]
