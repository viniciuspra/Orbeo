import { DragDropFile } from "./components/drag-drop-file";


export default function App() {
  return (
    <div className="h-screen w-full md:p-[3%]">
      <div className="w-full h-full m-auto flex md:items-center justify-center md:p-[4%] p-5">
        <DragDropFile/>
      </div>
    </div>
  );
}
