import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from 'routes'

import backIcon from 'assets/images/icons/back.svg'
import logoImg from 'assets/images/logo.svg'

import './styles.css'

interface HeaderProps {
  title: string
  titlePage: string
  description?: string
  img?: string
  message?: string
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to={HOME}>
          <img src={backIcon} alt='Volar' title='Voltar para a home' />
        </Link>
        <p>{props.titlePage}</p>
        <img src={logoImg} alt='Proffy' />
      </div>

      <div className='header-content'>
        <div className='flex'>
          <strong>{props.title}</strong>
          <div className='message'>
            <img src={props.img} alt='message' />
            <span>{props.message}</span>
          </div>
        </div>

        <p>{props.description}</p>
      </div>
      {props.children}
    </header>
  )
}

export default Header
