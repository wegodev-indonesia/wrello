import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Text, Flex } from "@chakra-ui/core";

type Props = {
  id: string;
  content: string;
  index: number;
};

const TaskCard: React.FC<Props> = ({ id, content, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Box
          width="100%"
          bg="white"
          p={1}
          rounded={2}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Flex>
            <Text flex={1} fontSize="sm">
              {content}
            </Text>
            <span {...provided.dragHandleProps}>≡</span>
          </Flex>
        </Box>
      )}
    </Draggable>
  );
};

export default TaskCard;
