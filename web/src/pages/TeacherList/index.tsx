import React, { useState, FormEvent } from 'react'
import Header from 'components/Header'
import TeacherItem, { Teacher } from 'components/TeacherItem'
import Input from 'components/Input'
import Select from 'components/Select'
import emojiIcon from 'assets/images/icons/emoji.svg'

import './styles.css'
import api from 'services/api'

const TeacherList = () => {
  const [teachers, setTeacheres] = useState([])
  console.log(teachers)

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  async function handleSearchTeacher(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setTeacheres(response.data)
  }

  return (
    <div id='page-teacher-list' className='container'>
      <Header
        title='Estes são os proffys disponíves.'
        titlePage='Estudar'
        img={emojiIcon}
        message='Nós temos 15 professores.'
      >
        <form id='search-teachers' onSubmit={handleSearchTeacher}>
          <Select
            value={subject}
            onChange={e => setSubject(e.target.value)}
            label='Matéria'
            name='subject'
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

          <Select
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
            label='Dia da semana'
            name='week_day'
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Fexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            value={time}
            onChange={e => setTime(e.target.value)}
            label='Hora'
            type='time'
            name='time'
          />

          <button type='submit' onClick={handleSearchTeacher}>
            Buscar
          </button>
        </form>
      </Header>
      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  )
}

export default TeacherList
