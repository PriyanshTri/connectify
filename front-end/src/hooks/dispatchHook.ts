// app/hooks.ts
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../main';

export const useAppDispatch = () => useDispatch<AppDispatch>();