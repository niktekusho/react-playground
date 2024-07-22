"use client";

import {
  ChevronDownIcon,
  DocumentIcon,
  FolderOpenIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export type Node = {
  label: string;
  children?: Node[];
};

export type TreeOpenMode = "normal" | "expanded" | "collapsed";

type TreeProp = {
  node: Node;
  openMode: TreeOpenMode;
};

export function Tree({ node, openMode }: TreeProp) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (openMode === "normal" || openMode === "expanded") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [openMode]);

  return (
    <li key={node.label}>
      <span className="flex items-center gap-2">
        {node.children && node.children.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
            <ChevronDownIcon
              className={`size-4 ${isOpen ? "" : "-rotate-90"}`}
            />
          </button>
        )}
        {node.children ? (
          <FolderOpenIcon
            className={`size-4 text-lime-500 ${
              node.children.length === 0 ? "ml-6" : ""
            }`}
          />
        ) : (
          <DocumentIcon className="ml-6 size-4 text-sky-400" />
        )}
        {node.label}
      </span>
      {node.children && isOpen && (
        <ol className="pl-6">
          {node.children?.map((child) => (
            <Tree node={child} key={child.label} openMode={openMode} />
          ))}
        </ol>
      )}
    </li>
  );
}
