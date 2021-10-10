import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import api from './api'
import Bookmark from './components/bookmark'
import NavBar from './components/navBar'
import MainPage from './layouts/mainPage'
import PersonPage from './layouts/personPage'

const App = () => {
  const [persons, setPersons] = useState()
  useEffect(() => {
    api.persons.fetchAll().then((data) => setPersons(data))
  }, [])

  const handleBookmark = (id) => {
    setPersons(
      persons.map((person) => {
        if (person._id === id) {
          person.bookmark = !person.bookmark
          return person
        }
        return person
      })
    )
  }

  return (
    <div className="container mt-3">
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => {
            return persons && <MainPage persons={persons} onBookmark={handleBookmark} {...props} />
          }}
        />
        <Route
          path="/person/:personId?"
          exact
          render={(props) => {
            return persons && <PersonPage onBookmark={handleBookmark} {...props} />
          }}
        />
        <Route
          path="/Bookmark"
          render={(props) => {
            return (
              persons && (
                <Bookmark
                  persons={persons.filter((person) => person.bookmark === true)}
                  onBookmark={handleBookmark}
                  {...props}
                />
              )
            )
          }}
        />
      </Switch>
    </div>
  )
}

export default App
