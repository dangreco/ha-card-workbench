import { useEffect } from "preact/hooks";
import {
  Row,
  Col,
  useToasts,
} from "@geist-ui/react";

import styles from "./styles";
import ConfigEditor from "../../components/config";
import Entities from "../../components/entities";
import Card from "../../components/card";
import WorkbenchConfig from "../../components/workbenchConfig";

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
      handleError(`${lineno}:${colno} ${message}`);
    };

    console.error = (...data: any[]) => {
      handleError(data.map((d) => `${d}`).join(""));
    };

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
            <ConfigEditor />
          </Row>
        </Col>

        <Col span={12} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
         <Card />
          <WorkbenchConfig />
        </Col>
      </Row>
    </div>
  );
};

export default Workbench;
