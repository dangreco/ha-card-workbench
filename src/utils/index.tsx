import {
  createConnection,
  getAuth,
  HassEntities,
  subscribeEntities,
} from "home-assistant-js-websocket";

export const connectToHassFresh = async (
  hassUrl: string,
  onEntities: (ent: HassEntities) => void
) => {
  const auth = await getAuth({ hassUrl });
  const connection = await createConnection({ auth });
  subscribeEntities(connection, onEntities);
};

export const hassReconnect = async (
  onEntities: (ent: HassEntities) => void
) => {
  try {
    const auth = await getAuth();
    const connection = await createConnection({ auth });
    subscribeEntities(connection, onEntities);
  } catch (e) {}
};
