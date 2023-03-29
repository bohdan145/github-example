import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const HeaderWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  padding: theme.spacing(4.5),
  borderRadius: theme.spacing(4),
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 60px 40px -45px',
  aspectRatio: '31/9',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  minHeight: 'min-content',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const HeroProject = () => {
  return (
    <HeaderWrapper className='gradient-bg'>
      <Box display='flex' alignItems='center'>
        <Avatar
          sx={(theme) => ({
            bgcolor: '#fff',
            color: theme.palette.primary.main,
            p: 3,
            mr: 2,
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px',
          })}
        >
          <DataObjectOutlinedIcon color='inherit' fontSize='large' />
        </Avatar>
        <Typography variant='h4' fontWeight={500}>
          Example project
        </Typography>
      </Box>
      <Box display='flex' alignItems='center'>
        <Box mx={3}>
          <Typography variant='overline' lineHeight={1} fontSize={14}>
            created
          </Typography>
          <Typography fontWeight={500}>Dec 3, 9:52 am</Typography>
        </Box>
        <Box mx={3}>
          <Typography variant='overline' lineHeight={1} fontSize={14}>
            Due date
          </Typography>
          <Typography fontWeight={500}>Feb 3, 00:00 am</Typography>
        </Box>
        <Box mx={3}>
          <Typography variant='overline' lineHeight={1} fontSize={14}>
            tracked time
          </Typography>
          <Typography fontWeight={500}>5 days</Typography>
        </Box>
      </Box>
    </HeaderWrapper>
  );
};

export default memo(HeroProject);
