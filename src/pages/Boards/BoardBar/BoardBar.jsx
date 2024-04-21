import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
        </Tooltip>
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { border: 'white' }
          }}
          variant="outlined"
          startIcon={ <PersonAddIcon/> }
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            // gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="khanhduy">
            <Avatar
              alt="khanhduy"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713520886/trello/IMG_20240419_165510_cwauio.jpg"
            />
          </Tooltip>
          <Tooltip title="congdinh">
            <Avatar
              alt="congdinh"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521114/trello/FB_IMG_1661311000954_vo8whg.jpg"
            />
          </Tooltip>
          <Tooltip title="puppy">
            <Avatar
              alt="puppy"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713520887/trello/IMG_20240419_165647_bti77r.jpg"
            />
          </Tooltip>
          <Tooltip title="kitty">
            <Avatar
              alt="kitty"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521191/trello/IMG_20240419_170611_bkpq4f.jpg"
            />
          </Tooltip>
          <Tooltip title="andanh">
            <Avatar
              alt="andanh"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521114/trello/IMG_20230924_222022_oejdmt.jpg"
            />
          </Tooltip>
          <Tooltip title="TrenDuongPitch">
            <Avatar
              alt="TrenDuongPitch"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713528485/trello/TD-Pitch_oubch5.png"
            />
          </Tooltip>
          <Tooltip title="andanh">
            <Avatar
              alt="andanh"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521114/trello/IMG_20230924_222022_oejdmt.jpg"
            />
          </Tooltip>
          <Tooltip title="andanh">
            <Avatar
              alt="andanh"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521114/trello/IMG_20230924_222022_oejdmt.jpg"
            />
          </Tooltip>
          <Tooltip title="andanh">
            <Avatar
              alt="andanh"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521114/trello/IMG_20230924_222022_oejdmt.jpg"
            />
          </Tooltip>
          <Tooltip title="andanh">
            <Avatar
              alt="andanh"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521114/trello/IMG_20230924_222022_oejdmt.jpg"
            />
          </Tooltip>
          <Tooltip title="andanh">
            <Avatar
              alt="andanh"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521114/trello/IMG_20230924_222022_oejdmt.jpg"
            />
          </Tooltip>
          <Tooltip title="andanh">
            <Avatar
              alt="andanh"
              src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521114/trello/IMG_20230924_222022_oejdmt.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar