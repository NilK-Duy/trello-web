import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessOutlined from '@mui/icons-material/SettingsBrightnessOutlined'
import Container from '@mui/material/Container'


function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-dark-light-mode"
        id="ddark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <LightModeIcon />Light
          </div>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SettingsBrightnessOutlined />System
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <DarkModeOutlined />Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <>
      <Container disableGutters maxWidth='false' sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
        <Box sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
          <ModeSelect />
        </Box>
        <Box sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.trello.boardBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
          Board Bar
        </Box>
        <Box sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center'
        }}>
        </Box>
      </Container >
    </>
  )
}

export default App
