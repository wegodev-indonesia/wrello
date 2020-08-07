import React from "react";
import { HStack } from "@chakra-ui/core";

import KanbanCard from "components/Kanban/KanbanCard";

const KanbanStack: React.FC = () => {
  return (
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
      <KanbanCard title="Todo" />
      <KanbanCard title="In Progress" />
      <KanbanCard title="Done" />
    </HStack>
  );
};

export default KanbanStack;
