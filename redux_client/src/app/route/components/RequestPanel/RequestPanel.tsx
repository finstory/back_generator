import { FC, useEffect, useState } from "react";
import { Text, IText, DGBorder, Button, IDGBorder } from "@components";
import scss from "@route/_scss/manager_panel.module.scss";
import S from "@/_common/services/main.service";
import MarkdownViewer from "@/components/Plugins/MarkdownViewer";
import { Title } from "./Title/_Title";
import MarkdownEditor from "@/components/Plugins/MarkdownEditor";


export const RequestPanel: FC = () => {
    const { removeModule } = S.module;
    const markdownContent = `
    # Hello World
    \`\`\`javascript
    console.log('Hello, world!');
    \`\`\`
    `;
    return (
        <DGBorder className={scss.endpoint_panel}
            effectHeight={"51rem"}
            effect={true}
            borderRadius={"2rem"}
            borderSize={"2px"}
            borderBetween={"3px"}
        >

            <div className={scss.panel}>
                <Title _scss={scss} />
                {/* <MarkdownViewer /> */}
                <MarkdownEditor />
            </div>

        </DGBorder >
    )
};
