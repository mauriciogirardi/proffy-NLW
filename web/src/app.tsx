import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HOME, STUDY, GIVE_CLASSES, REGISTRATION_COMPLETED } from 'routes'

const Landing = lazy(() => import('pages/Landing'))
const TeacherList = lazy(() => import('pages/TeacherList'))
const TeacherForm = lazy(() => import('pages/TeacherForm'))
const RegistrationCompleted = lazy(() => import('pages/RegistrationCompleted'))

const App = () => {
  return (
    <Suspense fallback=''>
      <Switch>
        <Route path={HOME} exact component={Landing} />
        <Route path={STUDY} component={TeacherList} />
        <Route path={GIVE_CLASSES} component={TeacherForm} />
        <Route
          path={REGISTRATION_COMPLETED}
          component={RegistrationCompleted}
        />
      </Switch>
    </Suspense>
  )
}

export default App
