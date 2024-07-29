import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import scss from "./mark_down.module.scss";
import "./mark_down.css";
import hljs from 'highlight.js';
// Inicializa el parser de Markdown

const mdParser = new MarkdownIt({
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
        }
        return ''; // Use external default escaping
    }
});

const MarkdownEditor: React.FC = () => {
    const [markdownText, setMarkdownText] = useState<string>("### Body Send:\n\n - aasdasdsad asd assa d\n\n```js\n{\n    \"user\": {\n        \"first_name\": 23,\n        \"email\": \"facu@gmail.com\",\n        \"password\": \"lkjsdflkjWOEI\"\n    }\n}\n\n\n\n```\n");

    const handleEditorChange = ({ text }: { text: string }) => {
        setMarkdownText(text);
    };

    return (
        <>

            {/* <MdEditor
                className={scss.markdown_editor_container}
                value={markdownText}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
                config={{
                    view: {
                        menu: true,
                        md: true,
                        html: false
                    }
                }}
            /> */}
            <MdEditor
                className={scss.markdown_preview}
                value={markdownText}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
                config={{
                    view: {
                        menu: false,
                        md: false,
                        html: true
                    }
                }}
            />

            {/* <ReactMarkdown className={scss.markdown_preview}>{markdownText}</ReactMarkdown> */}
        </>
    );
};

export default MarkdownEditor;
