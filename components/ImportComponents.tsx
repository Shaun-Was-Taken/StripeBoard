"use client";
import { CodeBlock, obsidian } from "react-code-blocks";

const ImportComponents = () => {
  return (
    <div className=" flex items-center justify-center">
      <CodeBlock
        text={`import EarningsBoard from "@/components/EarningsBoard"   `}
        language={`tsx`}
        showLineNumbers={false}
        theme={obsidian}
      />
    </div>
  );
};

export default ImportComponents;
