import { FormEvent, useRef, useState } from "react";
import { UploadCard } from "./upload-card";

type DropEvent = React.DragEvent<HTMLDivElement>;

export function DragDropFile() {
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleDrag = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DropEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
      const files = e.dataTransfer.files;
      handleFiles(files);
    }
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      const files = e.currentTarget.files;
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    console.log(files);
  };

  return (
    <form
      className="w-full h-full relative"
      onDragEnter={handleDrag}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <input
        id="input-file-upload"
        ref={inputRef}
        type="file"
        multiple={true}
        accept=".mp3,.wav,.aac,.flac,.ogg,.mp4"
        className="hidden"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="input-file-upload" className="relative">
        <UploadCard dragActive={dragActive} onButtonClick={onButtonClick} />
      </label>
      {dragActive && (
        <div
          className="absolute w-full h-full inset-0 rounded-xl"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
}
