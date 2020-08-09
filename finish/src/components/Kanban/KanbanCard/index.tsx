import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Box, Text, Flex, VStack } from "@chakra-ui/core";
import { RiDragDropLine } from "react-icons/ri";

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
              justifyContent={tasks.length > 0 ? "none" : "center"}
              alignItems={tasks.length > 0 ? "none" : "center"}
              minHeight={tasks.length > 0 ? "none" : "60px"}
              border={snapshot.isDraggingOver ? "none" : "1.5px dashed gray"}
              ref={provided.innerRef}
              rounded={2}
              backgroundColor={snapshot.isDraggingOver ? "blue.200" : "blue.50"}
              {...provided.droppableProps}
            >
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <TaskCard
                    key={task.id}
                    content={task.content}
                    id={task.id}
                    index={index}
                  />
                ))
              ) : (
                <Box as={RiDragDropLine} />
              )}
              {provided.placeholder}
            </VStack>
          )}
        </Droppable>
      </Flex>
    </Box>
  );
};

export default KanbanCard;
