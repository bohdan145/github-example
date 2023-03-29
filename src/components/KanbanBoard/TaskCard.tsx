import { DraggableProvided } from '@hello-pangea/dnd';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

import { KanbanTask, TagsTypes } from './types';

interface TaskProps {
  task: KanbanTask;
  provided: DraggableProvided;
  isDragging: boolean;
}

const colors: {
  [x in TagsTypes]: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
} = {
  Website: 'warning',
  App: 'secondary',
  Design: 'info',
  Frontend: 'default',
};

const CardWrapper = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: 10,
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px',
  transition: 'box-shadow .3s ease-out',
  position: 'relative',
  // backdropFilter: 'saturate(50%) blur(8px)',
  // backgroundColor: 'rgba(255,255,255,.7)',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 6px 24px 0px',
    cursor: 'grab',
  },
}));

const TaskCard = ({ task, provided, isDragging }: TaskProps) => {
  return (
    <CardWrapper
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      data-is-dragging={isDragging}
    >
      <CardHeader
        sx={{ pb: 0 }}
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <>
            <Box mb={1}>
              {task.tags.map((tag, index) => (
                <Chip sx={{ mr: 1 }} color={colors[tag]} label={tag} key={'tag-' + index} />
              ))}
            </Box>
            <Typography fontSize='1.1rem' lineHeight={1.2} variant='h6'>
              {task.title}
            </Typography>
          </>
        }
      />
      <CardContent>
        <Typography fontSize='0.9em' lineHeight={1.25}>
          {task.description}
        </Typography>
        <Divider sx={{ my: 2, ml: -2, mr: -2 }} />
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box display='flex'>
            {task.assignees.length && (
              <AvatarGroup
                sx={{
                  '& .MuiAvatar-root': { width: 30, height: 30, fontSize: 15 },
                }}
                max={4}
              >
                {task.assignees.map((person) => (
                  <Avatar
                    key={person.id}
                    sx={{ width: 30, height: 30 }}
                    alt={person.firstName + ' ' + person.lastName}
                    src={person.avatar}
                  />
                ))}
              </AvatarGroup>
            )}
          </Box>
          <Box display='flex' alignItems='center'>
            <Box display='flex' alignItems='center'>
              <SmsOutlinedIcon fontSize='small' />
              <Typography component='span' ml={1}>
                1
              </Typography>
            </Box>
            <Box ml={2} display='flex' alignItems='center'>
              <AttachFileOutlinedIcon fontSize='small' />
              <Typography component='span' ml={1}>
                2
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </CardWrapper>
  );
};

export default memo(TaskCard);
