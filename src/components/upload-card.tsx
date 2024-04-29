import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { CloudUpload, FilePlus } from "lucide-react";

interface UplaodCardProps {
  dragActive: boolean;
  onButtonClick: () => void;
}

export function UploadCard({
  dragActive = false,
  onButtonClick,
}: UplaodCardProps) {
  return (
    <Button
      className={`w-full md:h-full h-60 border-2 border-dashed rounded-xl focus-visible:border-solid focus-visible:border-white/80 border-primary relative ${
        dragActive ? "bg-transparent" : "bg-primary/10 hover:bg-primary/15"
      }`}
      onClick={onButtonClick}
    >
      <Card className="w-full h-full bg-transparent border-none lg:gap-3 cursor-pointer flex flex-col items-center justify-center">
        {!dragActive ? (
          <>
            <CardHeader className="p-2 md:p-3 " onClick={onButtonClick}>
              <CardTitle className="flex flex-col items-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary">
                <CloudUpload className="size-10 md:size-12 lg:size-14 xl:size-20" />
                <span>Click or Drag your file(s) here</span>
              </CardTitle>
            </CardHeader>
          </>
        ) : (
          <>
            <CardHeader className="p-2 md:p-3">
              <CardTitle className="flex flex-col items-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary">
                <FilePlus className="size-10 md:size-11 lg:size-12 xl:size-20" />
                <span>Drop your file(s) here.</span>
              </CardTitle>
            </CardHeader>
          </>
        )}

        <CardFooter className="p-2 md:p-3">
          <CardDescription className="opacity-75 text-xs md:text-sm lg:text-base xl:text-lg">
            Supported file formats: MP3, WAV, AAC, FLAC, OGG, MP4.
          </CardDescription>
        </CardFooter>
      </Card>
    </Button>
  );
}
