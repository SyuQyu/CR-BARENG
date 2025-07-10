import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
    $getSelection,
    $isRangeSelection,
    FORMAT_TEXT_COMMAND,
    $createParagraphNode
} from 'lexical';
import {
    $setBlocksType
} from '@lexical/selection';
import {
    $createHeadingNode,
    HeadingTagType
} from '@lexical/rich-text';
import {
    $isListNode,
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
    REMOVE_LIST_COMMAND,
    ListNode
} from '@lexical/list';
import {
    TOGGLE_LINK_COMMAND
} from '@lexical/link';
import {
    Bold,
    Italic,
    Underline,
    List,
    ListOrdered,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Heading1,
    Heading2,
    Link
} from 'lucide-react';

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