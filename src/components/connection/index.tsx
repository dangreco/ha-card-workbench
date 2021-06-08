import { FunctionalComponent } from "preact";
import { Button, Dot, Row, Text } from "@geist-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface ConnectionProps {
  connected: boolean;
  lastUpdate: number;
  openModal(): void;
}

const Connection: FunctionalComponent<ConnectionProps> = ({
  connected,
  lastUpdate,
  openModal,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Row>
          <Dot type={connected ? "success" : "secondary"} />
          <Text small>
            <strong>HASS {connected ? "Connected" : "Disconnected"}</strong>
          </Text>
        </Row>
        <Row>
          <Text
            small
            size={12}
            style={{ color: "rgba(255,255,255,0.5)", marginTop: 4 }}
          >
            <strong>
              Last Update:{" "}
              {lastUpdate === 0
                ? "Never"
                : dayjs(lastUpdate).format("h:mm:ss a")}
            </strong>
          </Text>
        </Row>
      </div>
      <div>
        <Button size={"small"} auto onClick={openModal}>
          Connect
        </Button>
      </div>
    </>
  );
};

export default Connection;
