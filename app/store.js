// 'use client'

import { configureStore } from '@reduxjs/toolkit';
import reducer from './Slice/page';

const store = configureStore({
  reducer: {
    users: reducer
  }
});

export default store;
