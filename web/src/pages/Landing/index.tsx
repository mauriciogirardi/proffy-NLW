import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GIVE_CLASSES, STUDY } from 'routes'
import api from 'services/api'

import logoImg from 'assets/images/logo.svg'
import landingImg from 'assets/images/landing.svg'
import studyIcon from 'assets/images/icons/study.svg'
import giveClassesIcon from 'assets/images/icons/give-classes.svg'
import purpleHeartIcon from 'assets/images/icons/purple-heart.svg'

import './styles.css'

const Landing = () => {
  const [totalConnection, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data
      setTotalConnections(total)
    })
  }, [])

  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt='Plataforma de estudos.'
          className='hero-image'
        />

        <div className='buttons-container'>
          <Link to={STUDY} className='study'>
            <img src={studyIcon} alt='Estudar' />
            Estudar
          </Link>

          <Link to={GIVE_CLASSES} className='give-classes'>
            <img src={giveClassesIcon} alt='Dar aulas' />
            Dar aulas
          </Link>
        </div>

        <span className='total-connections'>
          Total de {totalConnection} conexões já realizados
          <img
            src={purpleHeartIcon}
            alt='Total de 200 conexões já realizados'
          />
        </span>
      </div>
    </div>
  )
}

export default Landing
