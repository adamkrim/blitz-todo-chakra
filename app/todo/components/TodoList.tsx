import React from "react"
import { HStack, VStack, Text, IconButton, StackDivider, Spacer } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"

function TodoList() {
  const todos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ]

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton aria-label="Delete the todo" icon={<FaTrash />} isRound={true} />
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
