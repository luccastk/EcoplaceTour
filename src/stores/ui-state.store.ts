import { create } from "zustand";

interface UIState {
  isLoadingPage: boolean;
}

interface UIActions {
  setIsLoadingPage: (isLoading: boolean) => void;
}

const UiStateStore = create<UIState & UIActions>((set) => ({
  isLoadingPage: true,
  setIsLoadingPage: (isLoading) => set({ isLoadingPage: isLoading }),
}));

export default UiStateStore;
