import { Card, Text, Divider, Spacer } from "@geist-ui/react";
import CodeMirror, { Editor } from "@uiw/react-codemirror";
import yaml from "js-yaml";
import { Config } from "../../types";
import { useWorkbench } from "../../store";
import { debounce } from "home-assistant-js-websocket/dist/util";
import { useEffect, useState } from "preact/hooks";

const ConfigEditor = () => {

  const { config, updateConfig } = useWorkbench();
  const [localConfig, setLocalConfig] = useState('');

  const configChanged = (editor: Editor) => {
    try {
      const config = editor.getValue();
      setLocalConfig(config);
      yaml.load(config);
    } catch (e) {
      if (
        e.reason ===
        "can not read a block mapping entry; a multiline key may not be an implicit key"
      )
        return;
      console.error(`${e.name}: ${e.reason}`);
    }
  };

  const update = debounce(updateConfig, 100);

  useEffect(() => {
    update(localConfig);
  }, [localConfig])

  useEffect(() => {
    setLocalConfig(config);
  }, [])

  return (
    <Card style={{ height: "100%" }}>
      <Text h3>Configuration</Text>
      <CodeMirror
        value={localConfig}
        onChange={configChanged}
        options={{
          mode: "yaml",
          theme: "material-darker"
        }}
      />
    </Card>
  );
};

export default ConfigEditor;
