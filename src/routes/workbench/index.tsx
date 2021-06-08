import { useEffect } from "preact/hooks";
import {
  Row,
  Col,
  useToasts,
} from "@geist-ui/react";
import 'threedy'

import styles from "./styles";
import { entitiesDefaults } from "../../data/defaults";
import Config from "../../components/config";
import Entities from "../../components/entities";

const Workbench = () => {
  const [_, setToasts] = useToasts();

  const handleError = (message: string) => {
    setToasts({
      text: message,
      type: "error",
    });
  };

  useEffect(() => {
    window.onerror = function (message, source, lineno, colno, error) {
      handleError(`FOO${lineno}:${colno} ${message}`);
    };

    console.error = (...data: any[]) => {
      handleError(data.map((d) => `${d}`).join(""));
    };

    const threedy = document.getElementsByTagName("threedy-card")[0];
    // @ts-ignore
    threedy.hass = {
      states: entitiesDefaults,
    };
    // @ts-ignore
    threedy.setConfig({
      base_entity: "sensor.ender_3_v2",
      exact_time: true,
      monitored: ["ETA", "Bed", "Hotend", "Elapsed", "Remaining"],
    });
  }, []);

  return (
    <div style={styles.workbench}>
      <Row style={{ gap: 24, alignItems: "stretch", height: "100%" }}>
        <Col
          span={12}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          <Row style={{ height: "50%" }}>
            <Entities />
          </Row>

          <Row style={{ height: "50%" }}>
            <Config />
          </Row>
        </Col>

        <Col span={12}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* @ts-ignore */}
            <threedy-card></threedy-card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Workbench;
