export type InitialData = {
  tasks: {
    [key: string]: Task;
  };
  columns: {
    [key: string]: Column;
  };
  columnOrder: string[];
};

export type Task = {
  id: string;
  content: string;
};

export type Column = {
  id: string;
  title: string;
  taskIds: string[] | [];
};

export const initialData: InitialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watchh my favorite show" },
    "task-3": {
      id: "task-3",
      content:
        "Research next wegodev course and take notes of the choosen tech-stacks",
    },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
