import { writable } from "svelte/store";



// 화면 모드에 대한 store
function createScreenModeStore() {
    const {subscribe, set} = writable(true);

    return {
        subscribe,
        update: (mode: boolean) => set(mode)
    }
}
export const screenModeStore = createScreenModeStore();



// 컨텐츠 리스트에 대한 읽기전용 스토어
export const viewListNum = 6;