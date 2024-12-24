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
      // const index = state.findIndex((todo) => todo.id === action.payload);
      // state.splice(index, 1); // 操作相同陣列

      // 當 id 相同的時候移除該 todo === 當 id 不同時保留該項目
      return state.filter((todo) => todo.id !== action.payload);
      // 操作不同陣列情況下並非直接覆蓋 state，而是 return
    },
    updateTodo(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index] = action.payload; // 可以直接覆蓋 state 的原因是因為他覆蓋的是 state 下面的"特定索引位置"
    },
  },
});

// 定義的 reducers 可以使用 actions 來匯出(具名匯出)
export const { createTodo, removeTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
