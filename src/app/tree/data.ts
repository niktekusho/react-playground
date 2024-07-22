import { Node } from "./Tree";

const items: Node[] = [
  {
    label: "/",
    children: [
      {
        label: "node_modules",
        children: [],
      },
      {
        label: "public",
        children: [{ label: "next.svg" }, { label: "vercel.svg" }],
      },
      {
        label: "src",
        children: [
          {
            label: "app",
            children: [
              {
                label: "page.tsx",
              },
              { label: "globals.css" },
              { label: "layout.tsx" },
            ],
          },
          {
            label: "components",
            children: [
              {
                label: "Breadcrumb.tsx",
              },
            ],
          },
        ],
      },
      { label: "package.json" },
      { label: "README.md" },
    ],
  },
];

export function generateTree() {
  return items;
}

// function generateTree(numNodes: number, maxHeight: number): Node {
//   if (numNodes <= 0 || maxHeight <= 0) {
//     throw new Error("Number of nodes and max height must be greater than zero");
//   }

//   let nodeCount = 0;

//   function createNode(label: string, height: number): Node {
//     if (nodeCount >= numNodes || height > maxHeight) {
//       return { label };
//     }

//     const numChildren = Math.floor(Math.random() * (numNodes - nodeCount));
//     const children: Node[] = [];

//     for (let i = 0; i < numChildren; i++) {
//       if (nodeCount >= numNodes) break;
//       nodeCount++;
//       children.push(createNode(`Node ${nodeCount}`, height + 1));
//     }

//     return { label, children: children.length > 0 ? children : undefined };
//   }

//   return createNode(`Node ${nodeCount++}`, 1);
// }

// function createRandomTreeRecursive(
//   currentIndex: number,
//   remainingNodesCount: number,
//   remainingDepth: number
// ): Node | null {
//   if (remainingNodesCount <= 0 || remainingDepth <= 0) return null;

//   const shouldCreateLeaf = Math.random() > 0.5;
//   if (shouldCreateLeaf) {
//     return {
//       label: `node ${currentIndex}`,
//     };
//   }

//   const numberOfChildren = Math.floor(Math.random() * remainingNodesCount);
//   return {
//     label: `node ${currentIndex}`,
//     children: Array(numberOfChildren)
//       .map((_, i) =>
//         createRandomTreeRecursive(
//           currentIndex + i,
//           remainingDepth - numberOfChildren,
//           remainingDepth - 1
//         )
//       )
//       .filter((v) => v !== null),
//   };
// }
