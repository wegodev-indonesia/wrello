import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Box, Text, Flex, VStack } from "@chakra-ui/core";

import { Task } from "data/initial-data";
import TaskCard from "components/Kanban/TaskCard";

type KanbanCardProps = {
  id: string;
  title: string;
  tasks: Task[];
};

const KanbanCard: React.FC<KanbanCardProps> = ({ id, title, tasks = [] }) => {
  return (
    <Box width="270px" p={2} bg="blue.100" rounded={4}>
      <Flex direction="column">
        <Box mb={2}>
          <Text fontSize="lg" fontWeight={500} color="gray.900" isTruncated>
            {title}
          </Text>
        </Box>

        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <VStack
              flex={1}
              minHeight="60px"
              ref={provided.innerRef}
              rounded={2}
              backgroundColor={snapshot.isDraggingOver ? "blue.200" : undefined}
              {...provided.droppableProps}
            >
              {tasks.length > 0
                ? tasks.map((task, index) => (
                    <TaskCard
                      key={task.id}
                      content={task.content}
                      id={task.id}
                      index={index}
                    />
                  ))
                : null}
              {provided.placeholder}
            </VStack>
          )}
        </Droppable>
      </Flex>
    </Box>
  );
};

export default KanbanCard;
