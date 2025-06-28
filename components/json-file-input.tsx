"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function JsonFileInput() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setFileName(null);
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsedData = JSON.parse(content);
        // @ts-ignore
        window.temp1 = parsedData;
        // @ts-ignore
        console.log(window.temp1);
      } catch {
        alert(
          "Failed to parse JSON file. Please ensure it's a valid JSON format.",
        );
      }
    };

    reader.onerror = () => {
      alert("Failed to read file.");
    };

    reader.readAsText(file);
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="json-file">Upload JSON File</Label>
      <Input
        id="json-file"
        type="file"
        accept=".json"
        onChange={handleFileChange}
      />
      {fileName && (
        <p className="text-sm text-muted-foreground mt-2" aria-live="polite">
          File "{fileName}" loaded. Check your browser's console for
          `window.temp1`.
        </p>
      )}
    </div>
  );
}
