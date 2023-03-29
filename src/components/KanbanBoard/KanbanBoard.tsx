import { DragDropContext, Droppable, DroppableProvided, DropResult } from '@hello-pangea/dnd';
import Grid from '@mui/material/Grid';
import { memo, useCallback, useState } from 'react';

import { useTasksStore } from 'store';
import { reoderTasks, reorder } from 'utils';

import Column from './Column';

const KanbanBoard: React.FC = () => {
  const { data: columns, setData } = useTasksStore();
  const [ordered, setOrdered] = useState<string[]>(Object.keys(columns));

  const onDragEnd = useCallback(
    (result: DropResult) => {
      // dropped nowhere
      if (!result.destination) {
        return;
      }

      const source = result.source;
      const destination = result.destination;

      // did not move anywhere - can bail early
      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return;
      }

      // reordering column
      if (result.type === 'COLUMN') {
        setOrdered(reorder(ordered, source.index, destination.index));

        return;
      }

      setData(reoderTasks({ columns, source, destination }));
    },
    [columns, ordered, setData],
  );

  const renderColumns = useCallback(
    (provided: DroppableProvided) => (
      <Grid container mt={2} spacing={2} ref={provided.innerRef} {...provided.droppableProps}>
        {ordered.map((colId, index) => (
          <Column key={colId} id={colId} index={index} column={columns[colId]} />
        ))}
        {provided.placeholder}
      </Grid>
    ),
    [columns, ordered],
  );

  if (!ordered.length) return null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='board' type='COLUMN' direction='horizontal'>
        {renderColumns}
      </Droppable>
    </DragDropContext>
  );
};

export default memo(KanbanBoard);
