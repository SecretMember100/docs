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

]
