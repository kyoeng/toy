import { writable } from "svelte/store";



function createCategoryStore() {
    const { subscribe, set } = writable(-1);

    return {
        subscribe,
        change: (idx: number) => set(idx),
        reset: () => set(-1)
    }
}


export const categoryStore = createCategoryStore();