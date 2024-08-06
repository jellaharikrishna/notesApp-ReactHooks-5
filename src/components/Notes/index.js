import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  MainHeading,
  FormContainer,
  TitleInput,
  NotesInput,
  Button,
  NotesViewContainer,
  EmptyNotesView,
  EmptyNotesImage,
  EmptyNotesHeading,
  EmptyNotesPara,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNotes = event => setNotes(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    setNotesList(prevsNotes => [...prevsNotes, newNotes])
    setTitle('')
    setNotes('')
  }

  return (
    <AppContainer>
      <MainHeading>Notes</MainHeading>
      <FormContainer onSubmit={onSubmitForm}>
        <TitleInput
          onChange={onChangeTitle}
          value={title}
          placeholder="Title"
          type="text"
        />
        <NotesInput
          onChange={onChangeNotes}
          value={notes}
          placeholder="Take a Note..."
          rows="5"
        />
        <Button type="submit">Add</Button>
      </FormContainer>
      {notesList.length === 0 ? (
        <EmptyNotesView>
          <EmptyNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
          <EmptyNotesPara>Notes you add will appear here</EmptyNotesPara>
        </EmptyNotesView>
      ) : (
        <NotesViewContainer>
          {notesList.map(eachList => (
            <NoteItem key={eachList.id} listDetails={eachList} />
          ))}
        </NotesViewContainer>
      )}
    </AppContainer>
  )
}

export default Notes
