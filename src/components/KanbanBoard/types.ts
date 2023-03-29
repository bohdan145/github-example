interface KanbanBoardData {
  [x: string]: KanbanColumn;
}

interface KanbanColumn {
  title: string;
  status: string;
  items: KanbanTask[];
}

interface KanbanTask {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'hight' | 'critical';
  description: string;
  assignees: {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
  }[];
  tags: TagsTypes[];
}

type TagsTypes = 'App' | 'Website' | 'Design' | 'Frontend';

export type { KanbanBoardData, KanbanColumn, KanbanTask, TagsTypes };
