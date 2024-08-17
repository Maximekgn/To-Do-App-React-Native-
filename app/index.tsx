import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledTouchableOpacity = styled(TouchableOpacity)

interface Todo {
  id: number;
  text: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputText.trim() }]);
      setInputText('');
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <StyledView className="flex-1 p-5 bg-white">
      <StyledText className="text-2xl font-bold mb-5 mt-10 text-center ">Todo App</StyledText>
      <StyledView className="flex-row gap-3 mb-5">
        <StyledTextInput
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 rounded-3xl "
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ajouter une tâche"
        />
        <StyledTouchableOpacity
          className="bg-blue-500 rounded-full px-4 py-2 justify-center"
          onPress={addTodo}
        >
          <StyledText className="text-white font-bold ">+</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StyledView className="flex-row justify-between items-center p-3 border-b border-gray-200">
            <StyledText>{item.text}</StyledText>
            <StyledTouchableOpacity
              className="bg-red-500 rounded px-3 py-1"
              onPress={() => removeTodo(item.id)}
            >
              <StyledText className="text-white">Supprimer</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        )}
      />
    </StyledView>
  );
};

export default App;