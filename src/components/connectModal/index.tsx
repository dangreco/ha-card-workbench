import { Input, Modal, Text, useInput, useModal } from "@geist-ui/react";
import { connectToHassFresh } from "../../utils";
import { FunctionalComponent } from "preact";
import { HassEntities } from "home-assistant-js-websocket";

interface ConnectModalProps {
  setVisible(visible: boolean): void;
  bindings: any;
  onEntities(ent: HassEntities): void;
}

const ConnectModal: FunctionalComponent<ConnectModalProps> = ({
  setVisible,
  bindings,
  onEntities,
}) => {
  const { state: hassUrl, bindings: inputBindings } = useInput(
    window.localStorage.getItem("hassUrl") || "http://localhost:8123"
  );

  return (
    <Modal {...bindings}>
      <Modal.Title>Connect to Home Assistant</Modal.Title>
      <Modal.Content>
        <Text style={{ textAlign: "center" }}>
          Enter the URL of your instance:
        </Text>
        <Input
          style={{ textAlign: "center" }}
          {...inputBindings}
          width="100%"
        />
      </Modal.Content>
      <Modal.Action passive onClick={() => setVisible(false)}>
        Cancel
      </Modal.Action>
      <Modal.Action onClick={() => connectToHassFresh(hassUrl, onEntities)}>
        Connect
      </Modal.Action>
    </Modal>
  );
};

export default ConnectModal;
