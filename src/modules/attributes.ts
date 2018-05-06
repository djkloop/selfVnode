import {VNode, VNodeData} from '../vnode';
import {Module} from './module';

// 不知道干嘛的...
declare global {
  interface Element {
    setAttribute(name: string, value: string | number | boolean): void;
    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string | number | boolean): void;
  }
}

export type Attrs = Record<string, string | number | boolean>

const xlinkNS = 'http://www.w3.org/1999/xlink';
const xmlNS = 'http://www.w3.org/XML/1998/namespace';
const colonChar = 58;
const xChar = 120;

function updateAttrs(oldVnode: VNode, vnode: VNode): void {
  var key: string,elm: Element = vnode.elm as Element,
      oldAttrs = {oldVnode.data as VNodeData}.attrs,
      attrs = (vnode.data as VNodeData).attrs;
}