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

function BoardBar() {
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
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Dashboard"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
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
          <Tooltip title ="khanhduy">
            <Avatar
              alt="khanhduy"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/347839041_985792592438021_3838301849795130089_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEVb2pb-IiHheufKtF04W9jEs-_fapdEmgSz799ql0SaJRamW0Ce93JL06Fe3q0xBlXTbfSnmNxwUZmtImRJCii&_nc_ohc=ciTNzmHMcVMAX9WRAtA&_nc_ht=scontent.fhan2-3.fna&oh=00_AfD8sM3GJPHEMJMzTTIKu7taNjakjur0uLyrg55absExlA&oe=65AEDBD4"
            />
          </Tooltip>
          <Tooltip title ="congdinh">
            <Avatar
              alt="congdinh"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.18169-9/22851755_127525014675404_8205704337103247846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeF24_0p12K5ryaRGa-u9uZU23-nt-pvJ9_bf6e36m8n33naxU-8T2JvDLrAiKnEnE8yPfdv5BfFT8Vmp8JcHO5_&_nc_ohc=oJBe0c1AHMAAX9lOixI&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDPbQNS62N0qKaGbSjt6MGchun3itp3BfgOzYlrGkXTlw&oe=65D19D00"
            />
          </Tooltip>
          <Tooltip title ="dungct">
            <Avatar
              alt="dungct"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/201973383_367685591392604_6704602192861426049_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGEs36H9YCFYKlYACKKLSeDSaTD9sWgnG1JpMP2xaCcbWMAu9esrCfQKsZyvd4EC8955CrwGhjsL0DflSRvrzlc&_nc_ohc=1y07_mQlwFMAX8Dvb9H&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA84YwSouV0zjfX_F8UpnT_mxY2ii9ZnaYgtNHiY3F7_w&oe=65B008B1"
            />
          </Tooltip>
          <Tooltip title ="ngocanh">
            <Avatar
              alt="ngocanh"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/362944150_1083340715977278_2677880228143133193_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGwTVjbWLNNt0G_vtwxcbpaFWhVgb24VawVaFWBvbhVrNTwJpcyYBEvb7vebNWUH8PnA9Hx6QSyve3h_CVaIyR6&_nc_ohc=mvceZsnOPlkAX_D3yQd&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDc6rJh40NixlISqsNb6qd_IkrEa8wpN0d-jXz5IpYvFQ&oe=65B02493"
            />
          </Tooltip>
          <Tooltip title ="quanghuy">
            <Avatar
              alt="quanghuy"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/419623032_122095258916192614_4313990459954098346_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFLVsEF9LZbGuCNOXEPvKlaJB8xEC0zzrIkHzEQLTPOshSgGzAUYy4j-KDCZaHrsyuydPQv21wAO3osIY3ueLaS&_nc_ohc=WlJkX_irg1MAX9FMC03&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBtwwhJRG1SJtWzMQntJogqK3RV8V6J5E-8RCzm7xPPeA&oe=65AFD4CD"
            />
          </Tooltip>
          <Tooltip title ="TrenDuongPitch">
            <Avatar
              alt="TrenDuongPitch"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/325766836_416285684020895_2980302073013858908_n.png?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGxo-Yr4fPHe7y-IVwVoelrEriqJOOZupYSuKok45m6luOyPCF2PQg26D8uYOfleqZTa5M95PA87jSpi3zcBP6t&_nc_ohc=aMSwAZwRfMoAX-gps35&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBqkdsVtKc4xkrF2OhzX9KQCKMbupVpTliy5gNo5xNZJA&oe=65AEBBB6"
            />
          </Tooltip>
          <Tooltip title ="khanhduy">
            <Avatar
              alt="khanhduy"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/347839041_985792592438021_3838301849795130089_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEVb2pb-IiHheufKtF04W9jEs-_fapdEmgSz799ql0SaJRamW0Ce93JL06Fe3q0xBlXTbfSnmNxwUZmtImRJCii&_nc_ohc=ciTNzmHMcVMAX9WRAtA&_nc_ht=scontent.fhan2-3.fna&oh=00_AfD8sM3GJPHEMJMzTTIKu7taNjakjur0uLyrg55absExlA&oe=65AEDBD4"
            />
          </Tooltip>
          <Tooltip title ="congdinh">
            <Avatar
              alt="congdinh"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.18169-9/22851755_127525014675404_8205704337103247846_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeF24_0p12K5ryaRGa-u9uZU23-nt-pvJ9_bf6e36m8n33naxU-8T2JvDLrAiKnEnE8yPfdv5BfFT8Vmp8JcHO5_&_nc_ohc=oJBe0c1AHMAAX9lOixI&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDPbQNS62N0qKaGbSjt6MGchun3itp3BfgOzYlrGkXTlw&oe=65D19D00"
            />
          </Tooltip>
          <Tooltip title ="dungct">
            <Avatar
              alt="dungct"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/201973383_367685591392604_6704602192861426049_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGEs36H9YCFYKlYACKKLSeDSaTD9sWgnG1JpMP2xaCcbWMAu9esrCfQKsZyvd4EC8955CrwGhjsL0DflSRvrzlc&_nc_ohc=1y07_mQlwFMAX8Dvb9H&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA84YwSouV0zjfX_F8UpnT_mxY2ii9ZnaYgtNHiY3F7_w&oe=65B008B1"
            />
          </Tooltip>
          <Tooltip title ="ngocanh">
            <Avatar
              alt="ngocanh"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/362944150_1083340715977278_2677880228143133193_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGwTVjbWLNNt0G_vtwxcbpaFWhVgb24VawVaFWBvbhVrNTwJpcyYBEvb7vebNWUH8PnA9Hx6QSyve3h_CVaIyR6&_nc_ohc=mvceZsnOPlkAX_D3yQd&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDc6rJh40NixlISqsNb6qd_IkrEa8wpN0d-jXz5IpYvFQ&oe=65B02493"
            />
          </Tooltip>
          <Tooltip title ="quanghuy">
            <Avatar
              alt="quanghuy"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/419623032_122095258916192614_4313990459954098346_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFLVsEF9LZbGuCNOXEPvKlaJB8xEC0zzrIkHzEQLTPOshSgGzAUYy4j-KDCZaHrsyuydPQv21wAO3osIY3ueLaS&_nc_ohc=WlJkX_irg1MAX9FMC03&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBtwwhJRG1SJtWzMQntJogqK3RV8V6J5E-8RCzm7xPPeA&oe=65AFD4CD"
            />
          </Tooltip>
          <Tooltip title ="TrenDuongPitch">
            <Avatar
              alt="TrenDuongPitch"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/325766836_416285684020895_2980302073013858908_n.png?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGxo-Yr4fPHe7y-IVwVoelrEriqJOOZupYSuKok45m6luOyPCF2PQg26D8uYOfleqZTa5M95PA87jSpi3zcBP6t&_nc_ohc=aMSwAZwRfMoAX-gps35&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBqkdsVtKc4xkrF2OhzX9KQCKMbupVpTliy5gNo5xNZJA&oe=65AEBBB6"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar