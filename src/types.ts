import { GetState, SetState, StoreApi } from "zustand";

export interface Config {
  [key: string]: string | number | boolean | undefined | null;
}

export interface Workbench {
  cardUrl?: string;
  cardName?: string;
  configCardName?: string;
}

export interface HACWBStore {
  workbench: Workbench;
  config: string;
  entities: string;
  updateEntities(entities: string): void;
  updateConfig(config: string): void;
  updateWorkbench(workbench: Partial<Workbench>): void;
}

export type _Set = SetState<HACWBStore>;
export type _Get = GetState<HACWBStore>;
export type _Api = StoreApi<HACWBStore>;

export interface UpdateConfig {
  (set: _Set, get: _Get, api: _Api): HACWBStore;
  (arg0: (args: any) => void, arg1: any, arg2: any): any;
}