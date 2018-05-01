
/**
 * 
 * @param sel 选择器
 * @param data 绑定的数据
 * @param children 子节点数组
 * @param text 当前text节点内容
 * @param elm 对真实dom element的引用
 */

 export type Key = string | number;

 export interface VNode{
    sel: string | undefined;
    data: VNodeData | undefined;
    children: Array<VNode | string> | undefined;
    elm: Node | undefined;
    text: string | undefined;
    key: Key | undefined;
 }


 export interface VNodeData {
    key?: Key;
 }



export function vnode(
    sel: string | undefined, 
    data: any | undefined, 
    children: Array<VNode | string>, 
    text: string | undefined, 
    elm: Element | Text | undefined): VNode {
    let key = data === undefined ? undefined : data.key;
    return {
        sel,
        data,
        children,
        text,
        elm,
        key
    }
}


export default vnode;