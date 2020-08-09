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
          boxShadow={
            snapshot.isDragging
              ? `6px 6px 0 rgba(10,40,76,.15)`
              : `0 1px 0 rgba(9,30,66,.25)`
          }
          backgroundColor={snapshot.isDragging ? "blue.50" : "white"}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Flex alignItems="center">
            <Text
              mr={4}
              flex={1}
              fontSize="sm"
              wordBreak="break-all"
              whiteSpace="normal"
              color="gray.900"
            >
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
