import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AppBar from '../../components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth='false' sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container >
  )
}

export default Board
