import React from "react";
import { Box, Text, Flex } from "@chakra-ui/core";

type Props = {
  task: string;
};

const TaskCard: React.FC<Props> = ({ task }) => {
  return (
    <Box width="100%" bg="white" p={1} rounded={2}>
      <Flex>
        <Text flex={1} fontSize="sm">
          {task}
        </Text>
        <span>=</span>
      </Flex>
    </Box>
  );
};

export default TaskCard;
