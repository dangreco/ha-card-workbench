import { Card, Text, Row, Button, useModal } from "@geist-ui/react";
import CodeMirror, { Editor } from "@uiw/react-codemirror";
import { entitiesDefaults, jsonTreeTheme } from "../../data/defaults";
import JSONTree from "react-json-tree";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "preact/hooks";
import { HassEntities } from "home-assistant-js-websocket";
import Connection from "../connection";
import ConnectModal from "../connectModal";
import { hassReconnect } from "../../utils";
dayjs.extend(relativeTime);

const _updateEntities = (entities: any) => {
  const threedies = document.getElementsByTagName("threedy-card");
  if (threedies.length === 0) return;

  // @ts-ignore
  threedies[0].hass = {
    states: entities,
  };
};

const Entities = () => {
  const [hassConnected, setHassConnected] = useState(false);
  const [entities, setEntities] = useState({});
  const [lastUpdate, setLastUpdate] = useState(0);

  const { setVisible, bindings } = useModal();

  const _updateLocal = (editor: Editor) => {
    const jsonStr = editor.getValue();

    try {
      const jsonObj = JSON.parse(jsonStr);
      setEntities(entities);
      _updateEntities(jsonObj);
    } catch (e) {
      console.error(e.message);
    }
  };

  const _updateRemote = (entities: HassEntities) => {
    console.log(entities);
    const cm = document
      .getElementById("Entities")!
      .getElementsByClassName("CodeMirror");
    if (cm.length > 0) {
      cm[0].remove();
    }
    setHassConnected(true);
    setLastUpdate(Date.now);
    setEntities(entities);
    _updateEntities(entities);
  };

  useEffect(() => {
    hassReconnect(_updateRemote);
  }, []);

  return (
    <Card style={{ height: "100%" }} id={"Entities"}>
      <Row justify={"space-between"} align={"middle"}>
        <Text h3>Entities</Text>
        <Connection
          connected={hassConnected}
          lastUpdate={lastUpdate}
          openModal={() => setVisible(true)}
        />
      </Row>
      {hassConnected ? (
        <div style={{ overflow: "scroll" }}>
          <JSONTree data={entities} theme={jsonTreeTheme} invertTheme={false} />
        </div>
      ) : (
        <CodeMirror
          value={JSON.stringify(entitiesDefaults, null, 2)}
          onChange={_updateLocal}
          options={{
            mode: "json",
            theme: "material-darker",
          }}
        />
      )}
      <ConnectModal
        setVisible={setVisible}
        bindings={bindings}
        onEntities={_updateRemote}
      />
    </Card>
  );
};

export default Entities;
