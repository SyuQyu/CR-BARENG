"use client"
import { useEffect, useState } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { $getRoot, $createParagraphNode, $createTextNode, EditorState } from 'lexical';
import ToolbarPlugin from '@/utils/toolbarPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

interface LexicalEditorProps {
    content?: string;
    onChange: (content: string) => void;
}

export default function LexicalEditor({ content = '', onChange }: LexicalEditorProps) {
    // Initial editor config
    const initialConfig = {
        namespace: 'HotelDescription',
        theme: {
            root: 'lexical-editor-root',
            paragraph: 'lexical-paragraph',
            heading: {
                h1: 'lexical-h1',
                h2: 'lexical-h2',
                h3: 'lexical-h3',
            },
            list: {
                ul: 'lexical-ul',
                ol: 'lexical-ol',
                listitem: 'lexical-listitem',
            },
            quote: 'lexical-quote',
            link: 'lexical-link',
            text: {
                bold: 'lexical-bold',
                italic: 'lexical-italic',
                underline: 'lexical-underline',
                code: 'lexical-code',
            },
        },
        nodes: [
            HeadingNode,
            QuoteNode,
            ListNode,
            ListItemNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode,
        ],
        onError(error: Error) {
            console.error(error);
        },
    };

    // Handle editor state changes
    const handleEditorChange = (editorState: EditorState) => {
        editorState.read(() => {
            const jsonString = JSON.stringify(editorState.toJSON());
            onChange(jsonString);
        });
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className="lexical-editor-container">
                <ToolbarPlugin />
                <div className="lexical-editor-content">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="lexical-content-editable" />}
                        placeholder={<div className="lexical-placeholder">Enter hotel description here...</div>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                    <ListPlugin />
                    <LinkPlugin />
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                    <OnChangePlugin onChange={handleEditorChange} />
                    {content && <InitialContentPlugin content={content} />}
                </div>
            </div>
        </LexicalComposer>
    );
}

// Plugin to handle content changes
function OnChangePlugin({ onChange }: { onChange: (editorState: EditorState) => void }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            onChange(editorState);
        });
    }, [editor, onChange]);

    return null;
}

// Plugin to initialize content
function InitialContentPlugin({ content }: { content: string }) {
    const [editor] = useLexicalComposerContext();
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (isInitialized || !content) return;

        try {
            const contentState = JSON.parse(content);
            editor.setEditorState(editor.parseEditorState(contentState));
        } catch (error) {
            // If content is not valid JSON, set as plain text
            editor.update(() => {
                const root = $getRoot();
                root.clear();
                const paragraph = $createParagraphNode();
                paragraph.append($createTextNode(content));
                root.append(paragraph);
            });
        }

        setIsInitialized(true);
    }, [editor, content, isInitialized]);

    return null;
}