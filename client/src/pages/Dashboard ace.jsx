import { DoubleBorderGradient } from "../utilities/DoubleBorderGradient";
import { useEffect, useState } from "react";
import { BorderGradient } from "../utilities/BorderGradient";
import useRouteServices from "../services/useRouteServices";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/typescript";
import "ace-builds/src-noconflict/ext-language_tools";

//  import "brace/theme/monokai";

export const Dashboard = () => {
  // const {
  //   route: { endpointList },
  //   getAllRoutes,
  // } = useRouteServices();

  // useEffect(() => {
  //   getAllRoutes();
  // }, []);

  const data = `function onLoad(editor) {
    console.log("I've loaded!");
  }
 const get :string = 3;`;

  return (
    <div className="main_container">
      <div>
        <h1>Using React-Ace</h1>
        <AceEditor
          placeholder="Placeholder Text"
          mode="typescript"
          theme="monokai"
          name="blah2"
          selectionStyle="line"
          // onLoad={this.onLoad}
          // onChange={this.onChange}
          fontSize={14}
          lineHeight={19}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          editorProps={{ $useWorker: false }}
          // annotations={[
          //   {
          //     row: 0,
          //     column: 2,
          //     type: 'error', // can also be 'warning' or 'information'
          //     text: 'Some error.' // text to show in tooltip
          //   }
          // ]}
          value={`function onLoad(editor) {
            console.log("i've loaded");
          }
          const onLoad :number = "str";
          345435 34r
          `}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
            spellcheck: true,
          }}
        />
      </div>
    </div>
  );
};
