import { faker } from '@faker-js/faker';
import { DraggableLocation } from '@hello-pangea/dnd';

import { KanbanBoardData, KanbanTask, TagsTypes } from 'components/KanbanBoard/types';

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const reoderTasks = ({
  columns,
  source,
  destination,
}: {
  columns: KanbanBoardData;
  source: DraggableLocation;
  destination: DraggableLocation;
}) => {
  const current = columns[source.droppableId];
  const next = columns[destination.droppableId];
  const currentItems = [...current.items];
  const nextItems = [...next.items];
  const target = currentItems[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    return {
      ...columns,
      [source.droppableId]: {
        ...columns[source.droppableId],
        items: reorder(currentItems, source.index, destination.index),
      },
    };
  }

  // moving to different list
  // remove from original
  currentItems.splice(source.index, 1);
  // insert into next
  nextItems.splice(destination.index, 0, target);

  return {
    ...columns,
    [source.droppableId]: {
      ...columns[source.droppableId],
      items: currentItems,
    },
    [destination.droppableId]: {
      ...columns[destination.droppableId],
      items: nextItems,
    },
  };
};

function generateTasks(amount = 20): KanbanTask[] {
  const tags: TagsTypes[] = ['App', 'Website', 'Design', 'Frontend'];
  return new Array(faker.datatype.number({ min: 1, max: amount })).fill(0).map(() => ({
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    priority: 'medium',
    description: faker.lorem.lines(),
    assignees: new Array(faker.datatype.number({ min: 1, max: 3 })).fill(0).map(() => ({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
    })),
    tags: new Array(faker.datatype.number({ min: 1, max: tags.length - 1 })).fill(0).map(() => {
      return faker.helpers.arrayElement(tags);
    }),
  }));
}

export { generateTasks, reoderTasks, reorder };
