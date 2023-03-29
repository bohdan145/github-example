import { v4 as uuid } from 'uuid';
import { create } from 'zustand';

import { KanbanBoardData } from 'components/KanbanBoard/types';
import { generateTasks } from 'utils';

interface TasksStore {
  data: KanbanBoardData;
  setData: (data: KanbanBoardData) => void;
}

export const useTasksStore = create<TasksStore>((set) => ({
  data: {
    [uuid()]: {
      title: 'To do',
      status: 'todo',
      items: generateTasks(),
    },
    [uuid()]: {
      title: 'In Progress',
      status: 'in progress',
      items: generateTasks(5),
    },
    [uuid()]: {
      title: 'Done',
      status: 'done',
      items: generateTasks(),
    },
  }, //* MOCKUP data
  setData: (data) => set({ data }),
}));
