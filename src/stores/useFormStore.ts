import { create } from 'zustand';

type FormType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  
}

export const useFormStore = create<FormType>((set) => ({
  isOpen: false,
  setIsOpen: (open: boolean) => set({ isOpen: open }),}));
