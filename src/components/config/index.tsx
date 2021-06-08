import { Card, Text, Divider, Spacer } from "@geist-ui/react";
import CodeMirror, { Editor } from "@uiw/react-codemirror";
import { configDefaults } from "../../data/defaults";
import yaml from "js-yaml";

const Config = () => {
  const _updateConfig = (editor: Editor) => {
    try {
      const config = editor.getValue();
      const configObj = yaml.load(config);
      const threedies = document.getElementsByTagName("threedy-card");
      if (threedies.length === 0) return;
      // @ts-ignore
      threedies[0].setConfig(configObj);
    } catch (e) {
      if (
        e.reason ===
        "can not read a block mapping entry; a multiline key may not be an implicit key"
      )
        return;
      console.error(`${e.name}: ${e.reason}`);
    }
  };

  return (
    <Card style={{ height: "100%" }}>
      <Text h3>Configuration</Text>
      <CodeMirror
        value={configDefaults}
        onChange={_updateConfig}
        options={{
          mode: "yaml",
          theme: "material-darker",
        }}
      />
    </Card>
  );
};

export default Config;
