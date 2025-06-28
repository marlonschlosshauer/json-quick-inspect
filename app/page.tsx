import JsonFileInput from "@/components/json-file-input";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Play with your .json",
  description:
    "Drop in your .json file and quickly iterate from with in the developer console.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="flex flex-col gap-5 max-w-md">
        <h1 className="text-2xl">Play with your .json</h1>
        <p>
          Drop in your <code>.json</code> file and quickly iterate from with in
          the developer console.
        </p>
        <p>
          No need to create a <code>.js</code> file just to filter out values
          from an Array. Just press <kbd>Cmd+Option+I</kbd> (or <kbd>F12</kbd>,{" "}
          <kbd>Ctrl+Shift+I</kbd>) and iterate quickly.
        </p>
        <p>
          You can check out the{" "}
          <Link
            className="underline"
            href="https://github.com/marlonschlosshauer/json-quick-inspect"
            target="_blank"
          >
            source code here
          </Link>
          .
        </p>
        <div className="mt-4">
          <JsonFileInput />
        </div>
      </div>
    </main>
  );
}
