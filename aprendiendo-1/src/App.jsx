import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    id: '1',
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true,
  },
  {
    id: '2',
    userName: 'pheral',
    name: 'Pablo Duran',
    isFollowing: false,
  },
  {
    id: '3',
    userName: 'pepe',
    name: 'pepe Duran',
    isFollowing: false,
  }
]


export function App() {
  return(
    <section className="App">
      {
        users.map(user => {
          const {id, userName, name, isFollowing} = user
          return(
            <TwitterFollowCard
            key={id}
            username={userName}
            name={name}
            initialIsFollowing={isFollowing}/>
          )
        })
      }
    </section>
  )
}
