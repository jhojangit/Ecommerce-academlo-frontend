import { create } from 'zustand'


export const useMenuState = create((set) => ({
    isLogStore: false,
    changeStateTrue: () => set({ isLogStore: true }),
    changeStateFalse: () => set({ isLogStore: false })
}))



