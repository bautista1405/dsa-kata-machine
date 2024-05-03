export default function compare(a: BinaryNode<number> | null | undefined, b: BinaryNode<number> | null | undefined): boolean {
    if(a === null && b === null) return true //structural check, we reached a point where both are null, so structurally they're the same
    if(a === null || b === null) return false //structural check, we reached a point where one of them is null, so structurally they're not the same
    return compare(a?.left, b?.left) && compare(a?.right, b?.right)
}