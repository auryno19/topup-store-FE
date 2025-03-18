const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="my-3">
      <div className="flex flex-wrap gap-1 items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive("heading", { level: 1 })
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--h1"></span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive("heading", { level: 2 })
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--h2"></span>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setParagraph().run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive("paragraph")
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--heading"></span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive("bold")
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--bold"></span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive("italic")
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--italic"></span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive("strike")
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--strikethrough"></span>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("left").run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive({ textAlign: "left" })
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--align-left"></span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("center").run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive({ textAlign: "center" })
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--align-center"></span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("right").run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive({ textAlign: "right" })
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--align-right"></span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={`px-2 py-1 rounded-md transition-colors duration-200 flex items-center ${
            editor.isActive("bulletList")
              ? "bg-sky-500 text-white  "
              : "text-sky-500 bg-slate-300 hover:bg-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="codex--list-bulleted"></span>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
