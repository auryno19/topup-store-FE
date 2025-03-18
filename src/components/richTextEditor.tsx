"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import MenuBar from "./menuBar";
import StarterKit from "@tiptap/starter-kit";

interface RichTextEditorProps {
  label: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ label, onChange }) => {
  const handleChange = (value: string) => {
    onChange(value);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "left",
      }),
      Heading.configure({
        levels: [1, 2],
      }),
      BulletList,
    ],
    editorProps: {
      attributes: {
        class:
          "px-4 py-2 bg-slate-300 rounded-md focus:ring-sky-600 focus:outline-sky-600",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <>
      <label htmlFor="editor" className="text-sm text-slate-600">
        {label}
      </label>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default RichTextEditor;
