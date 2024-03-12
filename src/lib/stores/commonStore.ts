import { writable } from "svelte/store";



function createScreenModeStore() {
    const {subscribe, set} = writable(true);

    return {
        subscribe,
        update: (mode: boolean) => set(mode)
    }
}


export const screenModeStore = createScreenModeStore();