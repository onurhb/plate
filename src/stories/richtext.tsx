import React, { useState } from 'react';
import {
  Code,
  FormatBold,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
  LooksOne,
  LooksTwo,
} from '@material-ui/icons';
import { withHistory } from 'slate-history';
import {
  BlockButton,
  createEditorPlugins,
  EditablePlugins,
  FormatPlugin,
  MarkButton,
  useCreateEditor,
} from 'slate-plugins';
import { Toolbar } from 'slate-plugins/common/components/Toolbar';
import { Slate, withReact } from 'slate-react';
import { initialValueRichText } from './config/initialValues';

const plugins = [FormatPlugin()];

const editorPlugins = createEditorPlugins([withReact, withHistory], plugins);

export const RichText = () => {
  const [value, setValue] = useState(initialValueRichText);

  const editor = useCreateEditor(editorPlugins);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Toolbar height={18}>
        <MarkButton format="bold" icon={<FormatBold />} />
        <MarkButton format="italic" icon={<FormatItalic />} />
        <MarkButton format="underline" icon={<FormatUnderlined />} />
        <MarkButton format="code" icon={<Code />} />
        <BlockButton format="heading-one" icon={<LooksOne />} />
        <BlockButton format="heading-two" icon={<LooksTwo />} />
        <BlockButton format="block-quote" icon={<FormatQuote />} />
        <BlockButton format="numbered-list" icon={<FormatListNumbered />} />
        <BlockButton format="bulleted-list" icon={<FormatListBulleted />} />
      </Toolbar>
      <EditablePlugins
        plugins={plugins}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
      />
    </Slate>
  );
};
