import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CpzyTsSs.js","_app/immutable/chunks/scheduler.By1gkzyB.js","_app/immutable/chunks/index.gituuXpv.js","_app/immutable/chunks/entry.BlrG837T.js","_app/immutable/chunks/index.BJeoyush.js"];
export const stylesheets = ["_app/immutable/assets/4.DOkkq0IA.css"];
export const fonts = [];
