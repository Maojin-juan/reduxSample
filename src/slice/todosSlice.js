import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      text: "這是一段話(副本) Slice",
    },
  ],
  // 狀態管理器
  reducers: {
    createTodo(state, action) {
      console.log(state[0].text, action);
      state.push(action.payload);
    },
    removeTodo(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// 定義的 reducers 可以使用 actions 來匯出(具名匯出)
export const { createTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
