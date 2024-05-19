export type ThemeState = {
  darkMode: boolean;
};

export type ThemeAction = { type: "TOGGLE_THEME" };

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export { themeReducer };
