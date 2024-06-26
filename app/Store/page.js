'use client'

import { configureStore } from '@reduxjs/toolkit';
import reducer from '../Slice/page';

export const store = configureStore({
  reducer: {
    users: reducer
  }
});
