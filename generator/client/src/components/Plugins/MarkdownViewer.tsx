import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import scss from "./mark_down.module.scss";
import hljs from 'highlight.js';
import "./mark_down.css";
// Inicializa el parser de Markdown
// const mdParser = new MarkdownIt();

const CodeBlock: React.FC<{ language?: string; value: string }> = ({ language = 'javascript', value }) => {
    const html = hljs.highlight(value, { language }).value;
    return (
        <pre>
            <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
    );
};

const MarkdownViewer: React.FC = () => {
    const [markdownText, setMarkdownText] = useState<string>(`# Hello


> lorem ipsum dolor sit amet, consectetur adipiscing elit
`);

    const handleEditorChange = ({ text }: { text: string }) => {
        setMarkdownText(text);
    };

    return (
        <>
            <ReactMarkdown
                className={scss.markdown_preview}
                children={markdownText}
               
            />
       
        </>
    );
};

export default MarkdownViewer;
