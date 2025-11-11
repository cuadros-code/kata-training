

export function treeHeight(tree: { value: string; left: any; right: any } | null): number {
  let totalLevel: number[] = [];

  function getDepth(node: any, level = 1) {
    if (!node) return;
    totalLevel.push(level);
    getDepth(node.left, level + 1);
    getDepth(node.right, level + 1);
  }
  getDepth(tree)
  
  return totalLevel.length ? Math.max(...totalLevel) : 0;
}