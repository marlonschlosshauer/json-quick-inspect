import JsonFileInput from "@/components/json-file-input";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inspect your .json file in the browser dev tools",
  description:
    "Drop in your .json file and quickly iterate with it in the developer console.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="flex flex-col gap-5 max-w-md">
        <h1 className="text-2xl">Inspect</h1>
        <p>
          Quickly inspect the content of a <code>.json</code> file from inside
          of the developer console.
        </p>
        <p>
          No need to create a <code>.js</code> file just to filter out values
          from an Array. Just press <kbd>Cmd+Option+I</kbd> (or<kbd>F12</kbd>,{" "}
          <kbd>Ctrl+Shift+I</kbd>) and iterate quickly.
        </p>
        <p>
          You can check out the{" "}
          <Link
            className="underline"
            href="https://github.com/marlonschlosshauer/json-quick-inspect"
            target="_blank"
          >
            source code here.
          </Link>
        </p>
        <div className="mt-4">
          <JsonFileInput />
        </div>
      </div>
    </main>
  );
}
