import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IThemeState {
  mode: "light" | "dark";
}

const updateThemeClass = (mode: "light" | "dark") => {
  const body = document.body;
  if (mode === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
};

const getPreferredTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

const initialState: IThemeState = {
  mode: getPreferredTheme(),
};


if (typeof document !== "undefined") {
  updateThemeClass(initialState.mode);
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      updateThemeClass(action.payload);
    },
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      updateThemeClass(state.mode);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
