import React from "react"
import { Heading, VStack, IconButton } from "@chakra-ui/react"
import TodoList from "../todo/components/TodoList"
import AddTodo from "../todo/components/AddTodo"
import { FaSun, FaMoon } from "react-icons/fa"

function Todos() {
  return (
    <VStack p={4}>
      <IconButton
        aria-label="Turn to dark-mode (wip)"
        icon={<FaSun />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
      />

      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList />
      <AddTodo />
    </VStack>
  )
}

export default Todos
