import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
  isLoadingPage: boolean;
  viewTravelsAs: "list" | "grid";
  viewEduca: "list" | "grid";
}

interface UIActions {
  setIsLoadingPage: (isLoading: boolean) => void;
  setViewTravelsAs: (view: "list" | "grid") => void;
  setViewEduca: (view: "list" | "grid") => void;
}

const useUiStateStore = create<UIState & UIActions>()(
  persist(
    (set) => ({
      isLoadingPage: true,
      viewTravelsAs: "list",
      viewEduca: "list",
      setIsLoadingPage: (isLoading) => set({ isLoadingPage: isLoading }),
      setViewTravelsAs: (view) => set({ viewTravelsAs: view }),
      setViewEduca: (view) => set({ viewEduca: view }),
    }),
    {
      name: "ui-state",
      partialize: (state) => ({
        viewTravelsAs: state.viewTravelsAs,
        viewEduca: state.viewEduca,
      }),
    }
  )
);

export default useUiStateStore;
