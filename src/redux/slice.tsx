import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
    isLoading: boolean;
    isInitial: boolean;
    isMenuOpened: boolean;
  }

  const initialState: IAppState = {
    isLoading: false,
    isMenuOpened: false,
    isInitial: true,
  };

  const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      setIsMenuOpened: (state) => {
        state.isMenuOpened = !state.isMenuOpened;
      },
      setIsLoading: (state: IAppState, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload;
      },
      setIsInitial: (state: IAppState, action: PayloadAction<boolean>) => {
        state.isInitial = action.payload;
      },
    },
  });
  
  export const { setIsMenuOpened, setIsLoading, setIsInitial } = appSlice.actions;
  export default appSlice.reducer;
  

