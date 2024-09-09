import React, { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import scss from "./mark_down.module.scss";
import "./mark_down.css";
import hljs from 'highlight.js';
import { Button } from '../Atoms/Button/Button';
import BGradient from '../Wrapper/Panels/BGradient';
import { Text } from '../Atoms/Text/Text';
import S from '@S';
import { routeSelector, selectRoute } from '@/integrations/redux/slices/route.slice';

const defaultDescription = "### *Description:*\n\nThis is one example Description. The property `ID` is necesary to find `USERS`.\n\n---\n\n### *Example Body :*\n\n```CSS\nJSON  { \n\"name\": \"John Doe\",\n  \"email\": \"john@example.com\" \n}\n```\n---\n \n\n ### *Response Body :*\n\n* STATUS 200 OK:\n\n```js\n\"Getting all modules from the database.\" \n```\n\n* STATUS 201 OK:\n```json \nJSON {\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\"\n}\n```\n\n*  STATUS 404 NOT FOUND:\n```json \nErrorResponse {\n    \"type\": \"not_found\",\n    \"message\": \"'Module 'codmpany'' not found.\",\n    \"payload\": [\n        {\n            \"parameter\": \"internal\",\n            \"from\": null,\n            \"property\": \"Module 'codmpany'\",\n            \"constraints\": {\n                \"internal\": \"'Module 'codmpany'' not found.\"\n            }\n        }\n    ]\n}\n```";

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

    const { updateDescription } = S.route;
    const routeSelected = selectRoute.findRouteSelector();
    const [markdownText, setMarkdownText] = useState<string>("To add default documentation template, press 'Edit' button.");

    const handleEditorChange = ({ text }: { text: string }) => {
        setMarkdownText(text);
    }


    const [fullScreen, setFullScreen] = useState(false)

    const toggleFullScreen = () => {
        const editorElement = document.querySelector('.sec-md') as HTMLElement;
        const navElement = document.querySelector('.rc-md-navigation') as HTMLElement;
        // rc-md-editor
        const rcEditorElement = document.querySelector('.rc-md-editor') as HTMLElement;

        rcEditorElement.style.backgroundColor = fullScreen ? 'transparent' : '#121212';
        navElement.className = fullScreen ? 'rc-md-navigation in-visible' : 'rc-md-navigation visible';
        editorElement.className = fullScreen ? 'section sec-md in-visible' : 'section sec-md visible';

        if (markdownText === "To add default documentation template, press 'Edit' button.") {
            setMarkdownText(defaultDescription);
        }

        if (fullScreen) updateDescription(markdownText);

    }




    useEffect(() => {
        const editorElement = document.querySelector('.sec-md') as HTMLElement;
        const navElement = document.querySelector('.rc-md-navigation') as HTMLElement;
        if (!editorElement || !navElement) return;
        navElement.className = 'rc-md-navigation in-visible';
        editorElement.className = 'section sec-md in-visible';


        if (routeSelected && routeSelected.description) setMarkdownText(routeSelected.description || "To add default documentation template, press 'Edit' button.")
        else setMarkdownText("To add default documentation template, press 'Edit' button.");
    }, [routeSelected])

    return (
        <>
            <BGradient className={`${scss.screen_btn} ${fullScreen ? scss.active : ""}`}
                onClick={() => {
                    setFullScreen(!fullScreen)
                    toggleFullScreen()

                }}>
                <Text label="p">EDIT</Text>
            </BGradient>

            {routeSelected ? (

                <MdEditor
                    className={`${scss.markdown_preview} ${fullScreen ? "full" : ''}`}
                    value={markdownText}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={handleEditorChange}

                    config={{
                        view: {
                            menu: true,
                            md: true,
                            html: fullScreen ? false : true,

                        }
                    }}
                />
            ) : (
                <div className={`${scss.disabled_panel}`}>
                    <Text label="h2" size="medium" fontWeight="300" title="MANAGER PANEL">PLEASE SELECT ONE ENDPOINT...</Text>
                </div>
            )}

        </>
    );
};

export default MarkdownEditor;
