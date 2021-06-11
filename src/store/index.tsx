import create from "zustand";
import { persist } from "zustand/middleware";
import { _Api, _Get, _Set, Config, HACWBStore, UpdateConfig, Workbench } from "../types";
import { configDefaults, entitiesDefaults } from "../data/defaults";



export const useWorkbench = create<HACWBStore>(
    persist<HACWBStore>(
      (set, get) => ({
        workbench: {
          cardUrl: 'https://your-card-url.js',
          cardName: 'your-card-name',
          configCardName: 'your-config-card-name'
        },
        config: configDefaults,
        entities: entitiesDefaults,

        updateEntities: (entities: string) => set({ entities }),
        updateConfig: (config: string) => set({ config }),
        updateWorkbench: (workbench: Partial<Workbench>) => set({ workbench: { ...get().workbench, ...workbench} })

      }),
      {
        name: 'workbench-store'
      }
    )
)


