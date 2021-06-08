import { GeistProvider, CssBaseline, useToasts } from "@geist-ui/react";
import { useEffect } from "preact/hooks";
import Workbench from "../routes/workbench";

const App = () => {



  return (
    <div>
      <GeistProvider themeType={'dark'}>
        <CssBaseline />
        <div id="preact_root">
          <Workbench />
        </div>
      </GeistProvider>
    </div>
  );
};

export default App;
