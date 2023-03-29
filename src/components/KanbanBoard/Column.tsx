import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
} from '@hello-pangea/dnd';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo, useCallback } from 'react';

import TaskCard from './TaskCard';
import { KanbanColumn } from './types';

interface ColumnProps {
  column: KanbanColumn;
  index: number;
  id: string;
}

const statusColor: { [x: string]: string } = {
  todo: 'gainsboro',
  'in progress': 'mediumpurple',
  done: 'mediumseagreen',
};

const Column = ({ column, index, id }: ColumnProps) => {
  const renderContent = useCallback(
    (dropProvided: DroppableProvided) => (
      <Box ref={dropProvided.innerRef} minHeight={250} {...dropProvided.droppableProps}>
        {column.items.map((item, i) => {
          return (
            <Draggable key={item.id} draggableId={item.id} index={i}>
              {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
                <TaskCard
                  key={item.id}
                  task={item}
                  provided={dragProvided}
                  isDragging={dragSnapshot.isDragging}
                />
              )}
            </Draggable>
          );
        })}
        {dropProvided.placeholder}
      </Box>
    ),
    [column.items],
  );

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Grid ref={provided.innerRef} {...provided.draggableProps} item xs={4}>
          <Box
            display='flex'
            alignItems='center'
            mb={2}
            sx={{
              transition: 'color .2s ease-out',
              '&:hover': {
                color: '#8a64fd',
              },
            }}
            justifyContent='space-between'
            {...provided.dragHandleProps}
          >
            <Box display='flex' alignItems='center'>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: statusColor[column.status],
                  mr: 1,
                }}
              />
              <Typography fontWeight={500} fontSize={'1.1rem'} noWrap sx={{ userSelect: 'none' }}>
                {column.title}
              </Typography>
              <Box
                sx={(theme) => ({
                  minWidth: 25,
                  height: 25,
                  borderRadius: '50%',
                  bgcolor: alpha(theme.palette.primary.light, 0.2),
                  verticalAlign: 'center',
                  textAlign: 'center',
                  ml: 1,
                })}
              >
                <Typography component='span' fontSize='0.85rem' color='rgba(0, 0, 0, .6)'>
                  {column.items.length}
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{ p: '4px', minWidth: 'auto', borderRadius: 2 }}
              variant='contained'
              color='inherit'
              disableElevation
            >
              <AddIcon fontSize='small' />
            </Button>
          </Box>
          <Droppable droppableId={id} type='TASKS'>
            {renderContent}
          </Droppable>
        </Grid>
      )}
    </Draggable>
  );
};
export default memo(Column);
