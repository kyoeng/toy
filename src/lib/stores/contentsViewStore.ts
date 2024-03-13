import { writable } from "svelte/store";






function createContentsViewStore() {
    const init: contentsDataType[] = [];
    const {subscribe, set} = writable(init);

    return {
        subscribe,
        update: (arr: contentsDataType[]) => set(arr)
    }
}
export const contentsViewStore = createContentsViewStore();




function createShowMoreBtnStore() {
    const {subscribe, set} = writable(true);

    return {
        subscribe,
        update: (isShow: boolean) => set(isShow)
    }
}
export const showMoreBtnStore = createShowMoreBtnStore();