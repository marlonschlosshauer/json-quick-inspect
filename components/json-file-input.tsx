"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function JsonFileInput() {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      setFileName(null)
      return
    }

    setFileName(file.name)
    const reader = new FileReader()

    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const parsedData = JSON.parse(content)
        // Make the parsed JSON available in the console
        // @ts-ignore
        window.parsedJson = parsedData
        console.log("JSON data parsed and available as window.parsedJson:", parsedData)
      } catch (error) {
        console.error("Error parsing JSON file:", error)
        alert("Failed to parse JSON file. Please ensure it's a valid JSON format.")
      }
    }

    reader.onerror = (error) => {
      console.error("Error reading file:", error)
      alert("Failed to read file.")
    }

    reader.readAsText(file)
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="json-file">Upload JSON File</Label>
      <Input id="json-file" type="file" accept=".json" onChange={handleFileChange} />
      {fileName && (
        <p className="text-sm text-muted-foreground mt-2">
          File "{fileName}" loaded. Check your browser's console for `window.parsedJson`.
        </p>
      )}
    </div>
  )
}
