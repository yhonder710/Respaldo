import './App.css'
import { useState } from 'react'
export function TwitterFollowCard({username, name, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-btn is-following' : 'tw-followCard-btn'


  const handleClick = ()=>{
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-img'
          src="https://unavatar.io/midudev" alt="imagen de perfil midudev" />
        <div className='tw-followCard-infor'>
          <strong className='tw-followCard-name'>{username}</strong>
          <span className='tw-followCard-email'>{name}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
      </aside>
    </article>
  )
}
