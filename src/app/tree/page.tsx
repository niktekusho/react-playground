"use client";

import { useEffect, useState } from "react";
import { generateTree } from "./data";
import { Node, Tree, TreeOpenMode } from "./Tree";

export default function TreePage() {
  const [items, setItems] = useState<Node[]>([]);
  const [openMode, setOpenMode] = useState<TreeOpenMode>("normal");

  useEffect(() => {
    const tree = generateTree();
    setItems(tree);
  }, []);

  return (
    <div className="mx-4 grid gap-2">
      <div className="flex gap-2 flex-row-reverse">
        {/* Toolbar */}
        <button
          className="p-2 border border-gray-600 hover:border-gray-300"
          onClick={() => {
            setOpenMode("collapsed");
          }}
        >
          Collapse All
        </button>
        <button
          className="p-2 border border-gray-600 hover:border-gray-300"
          onClick={() => setOpenMode("expanded")}
        >
          Expand All
        </button>
      </div>
      <ol>
        {items.map((item) => (
          <Tree node={item} key={item.label} openMode={openMode} />
        ))}
      </ol>
    </div>
  );
}
