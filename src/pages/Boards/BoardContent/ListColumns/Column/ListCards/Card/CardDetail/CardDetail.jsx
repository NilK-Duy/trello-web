import { Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Button, DialogContent, DialogTitle, IconButton, Dialog } from '@mui/material'

import CancelIcon from '@mui/icons-material/Cancel'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SubjectIcon from '@mui/icons-material/Subject'

import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import CropOriginalIcon from '@mui/icons-material/CropOriginal'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import ScheduleIcon from '@mui/icons-material/Schedule'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ArchiveIcon from '@mui/icons-material/Archive'
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'
import DvrIcon from '@mui/icons-material/Dvr'

import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'

function CardDetail({ card, open, handleClose }) {

  const styles = {
    '& .MuiDialog-container': {
      '& .MuiPaper-root': {
        width: '100%',
        maxWidth: '800px' // Set your width here
      }
    },
    '& .MuiDialog-paper': {
      height: 'inherit',
      width: '800px',
      maxHeight: 'calc(100% - 15px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '5px 0',
      overflowY: 'auto',
      borderRadius: 2
    }
  }

  return (
    <Dialog
      sx={styles}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      {/* Image & cancelButton */}
      <DialogContent sx={{ mx: '-8px' }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 4,
            top: 4,
            color: (theme) => theme.palette.error.main
          }}
        >
          <CancelIcon sx={{ fontSize: '20px' }} />
        </IconButton>
        {card?.cover && <CardMedia sx={{ mt: 2, height: 300, borderRadius: 1.5 }} image={card?.cover} /> }

        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 0,
            pt: 3,
            '&:last-child': { p: 1.5 }
          }}
          id="customized-dialog-title"
        >
          <CreditCardIcon />
          <Typography sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            px: 2
          }}>
            {card?.title}
          </Typography>
        </DialogTitle>

        <Grid container spacing={2}>
          {/* Nội dung card */}
          <Grid item xs={9}>

            {/* memmbers */}
            <Box>
              <Button sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                ml: '-8px',
                color: (theme) => theme.palette.primary.main
              }}>
                Members
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AvatarGroup
                  max={5}
                  sx={{
                    gap: '10px',
                    '& .MuiAvatar-root': {
                      width: 35,
                      height: 35,
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
                  <Tooltip title="kitty">
                    <Avatar
                      alt="kitty"
                      src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713521191/trello/IMG_20240419_170611_bkpq4f.jpg"
                    />
                  </Tooltip>
                  <Tooltip title="TrenDuongPitch">
                    <Avatar
                      alt="TrenDuongPitch"
                      src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713528485/trello/TD-Pitch_oubch5.png"
                    />
                  </Tooltip>
                  <Tooltip title="add members">
                    <AddCircleIcon
                      sx={{
                        width: 42, height: 42, ml: '-10px', mt: '-3px',
                        color: (theme) => (theme.palette.mode === 'dark' ? '#9cb8ff' : '#bdbdbd')
                      }}
                    />
                  </Tooltip>
                </AvatarGroup>
              </Box>
            </Box>

            {/* Description */}
            <DialogTitle
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 0,
                '&:last-child': { p: 1.5 }
              }}
              id="customized-dialog-title"
            >
              <SubjectIcon />
              <Typography sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                px: 2
              }}>
                Description
              </Typography>
            </DialogTitle>

            <Box
              sx={{
                cursor: 'pointer',
                boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
                overflow: 'unset',
                display: card?.FE_PlaceholderCard ? 'none' : 'block',
                border: '1px solid transparent',
                borderRadius: 2,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#424242' : 'white')
              }}
            >
              <Typography sx={{ mx: 2, my: 2 }}>
                An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.
              </Typography>
              <Typography sx={{ mx: 2, my: 2 }}>
                AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center.
              </Typography>
              <Typography sx={{ mx: 2, my: 2 }}>
                All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking, over fully redundant, dedicated metro fiber providing high-throughput, low-latency networking between AZs.
              </Typography>
              <Typography sx={{ mx: 2, my: 2 }}>
                All traffic between AZs is encrypted. The network performance is sufficient to accomplish synchronous replication between AZs.
              </Typography>
              <Typography sx={{ mx: 2, my: 2 }}>
                AZs make partitioning applications for high availability easy.
              </Typography>
              <Typography sx={{ mx: 2, my: 2 }}>
                If an application is partitioned across AZs, companies are better isolated and protected from issues such as power outages, lightning strikes, tornadoes, earthquakes, and more.
              </Typography>
              <Typography sx={{ mx: 2, my: 2 }}>
              AZs are physically separated by a meaningful distance, many kilometers, from any other AZ, although all are within 100 km (60 miles) of each other.
              </Typography>
            </Box>

            {/* Activity */}
            <DialogTitle
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 0,
                '&:last-child': { p: 1.5 }
              }}
              id="customized-dialog-title"
            >
              <DvrIcon />
              <Typography sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                px: 2
              }}>
                Activity
              </Typography>
            </DialogTitle>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
              <Tooltip title="khanhduy">
                <Avatar
                  sx={{
                    width: '40px',
                    height: '40px'
                  }}
                  alt="khanhduy"
                  src="https://res.cloudinary.com/djykb3sz8/image/upload/v1713520886/trello/IMG_20240419_165510_cwauio.jpg"
                />
              </Tooltip>
              <form noValidate autoComplete="off">
                <FormControl sx={{ width: '57.5ch' }}>
                  <OutlinedInput placeholder="Writing a comment..." />
                </FormControl>
              </form>
            </Box>

          </Grid>

          {/* Tiện ích */}
          <Grid item xs={3} >
            <Box sx={{ mb: 2 }}>
              <Button sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                color: (theme) => theme.palette.primary.main
              }}>
                Add to card
              </Button>
              <MenuItem
                sx={{
                  mb: 1,
                  '&:hover': {
                    color: 'primary.dark',
                    '& .add-cover-icon': { color: 'primary.dark' }
                  }
                }}
              >
                <ListItemIcon><CropOriginalIcon className="add-cover-icon" fontSize="small" /></ListItemIcon>
                <ListItemText>Cover</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><AttachFileIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Attachment</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><BookmarkBorderIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Labels</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><TaskAltIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Checklist</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><ScheduleIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Dates</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><AutoFixHighIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Custom Fields</ListItemText>
              </MenuItem>
            </Box>

            <Divider sx={{ mb: '15px', mt: '-2px' }} />
            <Box sx={{ mb: 2 }}>
              <Button sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                color: (theme) => theme.palette.primary.main
              }}>
                Power-Ups
              </Button>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><AspectRatioIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Card Size</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><AddToDriveIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Google Drive</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><AddIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Add Power-Ups</ListItemText>
              </MenuItem>
            </Box>
            <Divider sx={{ mb: '15px', mt: '-2px' }} />


            <Box sx={{ mb: 2 }}>
              <Button sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                color: (theme) => theme.palette.primary.main
              }}>
                Actions
              </Button>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><ArrowForwardIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Move</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><AutoAwesomeIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Make Template</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><ArchiveIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Archive</ListItemText>
              </MenuItem>
              <MenuItem sx={{ mb: 1 }}>
                <ListItemIcon><ShareIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Share</ListItemText>
              </MenuItem>
              <MenuItem
                sx={{
                  mb: 1,
                  '&:hover': {
                    color: 'warning.dark',
                    '& .delete-forever-icon': { color: 'warning.dark' }
                  }
                }}
              >
                <ListItemIcon><DeleteIcon className="delete-forever-icon" fontSize="small" /></ListItemIcon>
                <ListItemText>Delete</ListItemText>
              </MenuItem>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )

}

export default CardDetail
