import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
