import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { DRAWER_WIDTH } from 'constant';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface AppHeaderProps {
  open: boolean;
  setOpen: () => void;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  width: 'auto',
  zIndex: theme.zIndex.drawer + 1,
  willChange: 'left',
  transition: theme.transitions.create(['left'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  left: `calc(${theme.spacing(12.5)} + 1px)`,
  ...(open && {
    left: DRAWER_WIDTH,
    transition: theme.transitions.create(['left'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppHeader = ({ open, setOpen }: AppHeaderProps) => {
  return (
    <AppBar
      sx={{
        backdropFilter: 'saturate(50%) blur(8px)',
        backgroundColor: 'rgba(255,255,255,.7)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px',
      }}
      color='default'
      position='fixed'
      open={open}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={setOpen}
          edge='start'
          sx={{ marginRight: 2 }}
        >
          {open ? <KeyboardDoubleArrowLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant='h6' noWrap color='inherit'>
          Dahsboard
        </Typography>

        <Box ml='auto' display='flex' alignItems='center'>
          <AvatarGroup
            sx={{
              '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
            }}
            max={4}
          >
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt='Remy Sharp'
              src='https://i.pravatar.cc/200'
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt='Travis Howard'
              src='https://i.pravatar.cc/201'
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt='Cindy Baker'
              src='https://i.pravatar.cc/202'
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt='Agnes Walker'
              src='https://i.pravatar.cc/203'
            />
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt='Trevor Henderson'
              src='https://i.pravatar.cc/204'
            />
          </AvatarGroup>

          <Box ml={3}>
            <IconButton color='inherit' aria-label='open drawer'>
              <TextsmsOutlinedIcon />
            </IconButton>
            <IconButton sx={{ marginX: 1 }} color='inherit' aria-label='open drawer'>
              <TimerOutlinedIcon />
            </IconButton>
            <IconButton color='inherit' aria-label='open drawer'>
              <MoreVertOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
