import React, { useState } from "react";
import { HStack } from "@chakra-ui/core";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { initialData, InitialData, Column } from "data/initial-data";
import KanbanCard from "components/Kanban/KanbanCard";

const KanbanStack: React.FC = () => {
  const [data, setData] = useState<InitialData>(initialData);

  const onDragEnd = (result: DropResult): void => {
    const { destination, source, draggableId } = result;
    const sourceColumn: Column = data.columns[source.droppableId];
    const destinationColumn: Column = data.columns[destination!.droppableId];

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Dragging on the same KanbanCard/Column
    if (sourceColumn.id === destinationColumn.id) {
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <HStack
        mt="40px"
        p={4}
        spacing={8}
        top={0}
        right={0}
        bottom={0}
        left={0}
        userSelect="none"
        whiteSpace="nowrap"
        overflowX="auto"
        overflowY="hidden"
        position="absolute"
        alignItems="flex-start"
      >
        {data.columnOrder.map(
          (columnId: string): React.ReactNode => {
            const column = data.columns[columnId];
            const tasks = (column.taskIds as string[]).map(
              (taskId: string) => data.tasks[taskId]
            );

            return (
              <KanbanCard
                key={column.id}
                id={column.id}
                title={column.title}
                tasks={tasks}
              />
            );
          }
        )}
      </HStack>
    </DragDropContext>
  );
};

export default KanbanStack;
