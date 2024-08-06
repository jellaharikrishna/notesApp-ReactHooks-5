import {ListCard, ListTitle, ListNotes} from './styledComponents'

const NoteItem = props => {
  const {listDetails} = props
  const {title, notes} = listDetails

  return (
    <ListCard>
      <ListTitle>{title}</ListTitle>
      <ListNotes>{notes}</ListNotes>
    </ListCard>
  )
}

export default NoteItem
