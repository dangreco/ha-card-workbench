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
import { useWorkbench } from "../../store";
dayjs.extend(relativeTime);

const Entities = () => {

  const {entities, updateEntities} = useWorkbench();

  const [hassConnected, setHassConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(0);

  const { setVisible, bindings } = useModal();

  const _updateLocal = (editor: Editor) => {
    const jsonStr = editor.getValue();

    try {
      JSON.parse(jsonStr);
      updateEntities(jsonStr);
    } catch (e) {
      console.error(e.message);
    }
  };

  const _updateRemote = (haEntities: HassEntities) => {
    const cm = document
      .getElementById("Entities")!
      .getElementsByClassName("CodeMirror");
    if (cm.length > 0) {
      cm[0].remove();
    }
    setHassConnected(true);
    setLastUpdate(Date.now);
    updateEntities(JSON.stringify(haEntities, null, 2));
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
          <JSONTree data={JSON.parse(entities)} theme={jsonTreeTheme} invertTheme={false} />
        </div>
      ) : (
        <CodeMirror
          value={entities}
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
