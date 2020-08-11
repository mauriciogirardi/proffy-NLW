import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { REGISTRATION_COMPLETED } from 'routes'
import api from 'services/api'

import Header from 'components/Header'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import Select from 'components/Select'

import warningIcon from 'assets/images/icons/warning.svg'
import rocketIcon from 'assets/images/icons/rocket.svg'
import './styles.css'
import toMoney from 'utils/money'

const TeacherForm = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {
          ...scheduleItem,
          [field]: value,
        }
      }
      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()

    api
      .post('classes', {
        name,
        avatar,
        whatsapp: whatsapp.replace(/\D/g, ''),
        bio,
        subject,
        cost: +cost,
        schedule: scheduleItems,
      })
      .then(() => {
        history.push(REGISTRATION_COMPLETED)
      })
      .catch(() => {
        alert('Erro no cadastro')
      })
  }

  return (
    <div id='page-teacher-form' className='container'>
      <Header
        titlePage='Dar aulas'
        img={rocketIcon}
        message='Prepare-se! vai ser o máximo'
        title='Que incrível que você quer dar aulas.'
        description='O primeiro passo é preencher esse formulário de inscrição.'
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label='Nome completo'
              name='name'
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
            <Input
              label='Link da sua foto (comece com //http)'
              name='avatar'
              value={avatar}
              onChange={e => {
                setAvatar(e.target.value)
              }}
            />
            <Input
              mask='phone'
              placeholder='( ) _____ _____'
              label='Whatsapp'
              name='whatsapp'
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value)
              }}
            />
            <Textarea
              maxLength={300}
              label='Biografia (Máximo 300 caracteres)'
              name='bio'
              value={bio}
              onChange={e => {
                setBio(e.target.value)
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label='Matéria'
              name='subject'
              value={subject}
              onChange={e => {
                setSubject(e.target.value)
              }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciência', label: 'Ciência' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />

            <Input
              placeholder='R$'
              mask='currency'
              label='Custo da sua hora por aula'
              name='cost'
              value={cost}
              onChange={e => {
                setCost(e.target.value)
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horário disponíveis
              <button onClick={addNewScheduleItem} type='button'>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={index} className='schedule-item'>
                <Select
                  value={scheduleItem.week_day}
                  onChange={e =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
                  label='week_day'
                  name='Dia da semana'
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />

                <Input
                  name='from'
                  label='Das'
                  type='time'
                  value={scheduleItem.from}
                  onChange={e =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />
                <Input
                  name='to'
                  label='Até'
                  type='time'
                  value={scheduleItem.to}
                  onChange={e =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt='Aviso inportante' />
              Importante!
              <br />
              Preencha todos os dados
            </p>
            <button type='submit'>Salvar o cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
