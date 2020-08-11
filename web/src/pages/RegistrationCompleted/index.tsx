import React from 'react'
import { Link } from 'react-router-dom'
import { STUDY } from 'routes'
import doneIcon from 'assets/images/icons/done.svg'
import './styles.css'

const RegistrationCompleted = () => {
  return (
    <section id='registration-completed'>
      <main>
        <img src={doneIcon} alt='Feito' />
        <h1>Cadastro salvo!</h1>
        <span>
          Tudo certo, seu cadastro está na nossa lista de professores.
          <br /> Agora é só ficar de olho no seu WhatsApp.
        </span>
        <Link to={STUDY}> Acessar lista</Link>
      </main>
    </section>
  )
}

export default RegistrationCompleted
