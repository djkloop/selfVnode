import {
    vnode,
    VNode,
    VNodeData
} from './vnode';
export type VNodes = Array<VNode>;
export type VNodeChildElement = VNode | string | number;
export type ArrayOrElement<T> = T | T[];
export type VNodeChildren = ArrayOrElement<VNodeChildElement>;
import * as is from './is';

/**
 * svg
 */
function addNS(
    data:any,
    children: VNodes | undefined,
    sel: string | undefined
): void {
    data.ns = 'http://www.w3c.org/2000/svg';
    if(sel !== 'foreignObject' && children !== undefined) {
        for (let i = 0; i < children.length; i++) {
            let childData = children[i].data;
            if(childData !== undefined) {
                addNS(childData, (children[i] as VNode).children as VNodes, children[i].sel)
            }
        }
    }
}


export default (_: string) => {
    console.log('h 函数...')
}