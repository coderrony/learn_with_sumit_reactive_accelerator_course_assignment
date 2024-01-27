export const initialState = [
  {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: false,
  },
];
export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "IS_FAVORITE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isFavorite: !task.isFavorite }
          : task
      );
    case "RESET_TASK":
      return [];

    default:
      return state;
  }
};
