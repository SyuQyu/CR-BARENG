import {
    TOGGLE_LINK_COMMAND
} from '@lexical/link';
import {
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND} from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
    $createHeadingNode,
    HeadingTagType
} from '@lexical/rich-text';
import {
    $setBlocksType
} from '@lexical/selection';
import {
    $createParagraphNode,
    $getSelection,
    $isRangeSelection,
    FORMAT_TEXT_COMMAND} from 'lexical';
import {
    Bold,
    Heading1,
    Heading2,
    Italic,
    Link,
    List,
    ListOrdered,
    Underline} from 'lucide-react';

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();

    const insertLink = () => {
        const url = prompt('Enter link URL');
        if (url) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, {
                url
            })
        }

    };

    const formatHeading = (tag: HeadingTagType) => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createHeadingNode(tag));
            }
        });
    };

    const formatParagraph = () => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createParagraphNode());
            }
        });
    };

    return (
        <div className="toolbar">
            <button
                type="button"
                onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
                className="toolbar-item"
                aria-label="Format Bold"
            >
                <Bold size={18} />
            </button>

            <button
                type="button"
                onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
                className="toolbar-item"
                aria-label="Format Italics"
            >
                <Italic size={18} />
            </button>

            <button
                type="button"
                onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
                className="toolbar-item"
                aria-label="Format Underline"
            >
                <Underline size={18} />
            </button>

            <span className="divider" />

            <button
                type="button"
                onClick={() => formatParagraph()}
                className="toolbar-item"
                aria-label="Paragraph"
            >
                <span>¶</span>
            </button>

            <button
                type="button"
                onClick={() => formatHeading('h1')}
                className="toolbar-item"
                aria-label="Heading 1"
            >
                <Heading1 size={18} />
            </button>

            <button
                type="button"
                onClick={() => formatHeading('h2')}
                className="toolbar-item"
                aria-label="Heading 2"
            >
                <Heading2 size={18} />
            </button>

            <span className="divider" />

            <button
                type="button"
                onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)}
                className="toolbar-item"
                aria-label="Bullet List"
            >
                <List size={18} />
            </button>

            <button
                type="button"
                onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)}
                className="toolbar-item"
                aria-label="Numbered List"
            >
                <ListOrdered size={18} />
            </button>

            <span className="divider" />

            <button
                type="button"
                onClick={insertLink}
                className="toolbar-item"
                aria-label="Insert Link"
            >
                <Link size={18} />
            </button>
        </div>
    );
}