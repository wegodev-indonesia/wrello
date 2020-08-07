import React from "react";
import { Box, Text, Flex, VStack } from "@chakra-ui/core";

import TaskCard from "components/Kanban/TaskCard";

type KanbanCardProps = {
  title: string;
};

const KanbanCard: React.FC<KanbanCardProps> = ({ title }) => {
  return (
    <Box minWidth="270px" p={2} bg="gray.300" rounded={4}>
      <Flex direction="column">
        <Box mb={2}>
          <Text fontSize="lg" fontWeight={500} color="gray.900" isTruncated>
            {title}
          </Text>
        </Box>

        <VStack flex={1} minHeight="60px">
          <TaskCard task="Coding" />
          <TaskCard task="Coding" />
          <TaskCard task="Coding" />
        </VStack>
      </Flex>
    </Box>
  );
};

export default KanbanCard;
