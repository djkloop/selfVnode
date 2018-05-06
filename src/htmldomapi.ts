export interface DOMAPI {
  createElement: (tagName: any) => HTMLElement;
  createElementNS: (namespaceURI: string, qualifiedName: string) => Element;
  createTextNode: (text: string) => Text;
  createComment: (text: string) => Comment;
  insertBefore: (parentNode: Node, newNode: Node, referenceNode: Node | null) => void;
  removeChild: (node: Node, child: Node) => void;
  appendChild: (node: Node, child: Node) => void;
  parentNode: (node: Node) => Node;
  nextSibling: (node: Node) => Node;
  tagName: (elm: Element) => string;
  setTextContent: (node: Node, text: string | null) => void;
  getTextContent: (node: Node) => string | null;
  isElement: (node: Node) => node is Element;
  isText: (node: Node) => node is Text;
  isComment: (node: Node) => node is Comment;
}
// 创建HTML元素
function createElement(tagName : any): HTMLElement {
  return document.createElement(tagName);
}
// 创建XML
function createElementNS(namespaceURI : string, qualifiedName : string) : Element {
  return document.createElementNS(namespaceURI, qualifiedName);
}
// 创建一个文本节点
function createTextNode(text : string) : Text {
  return document.createTextNode(text);
}
// 创建一个注释节点
function createComment(text : string) : Comment {
  return document.createComment(text);
}
// 插入元素
function insertBefore(parentNode : Node, newNode : Node, referenceNode : Node) : void {
  parentNode.insertBefore(newNode, referenceNode);
}
// 移除子元素
function removeChild(node : Node, child : Node) : void {
  node.removeChild(child);
}
// 添加子元素
function appendChild(node : Node, child : Node) : void {
  node.appendChild(child);
}
// 获取父亲节点没有返回null
function parentNode(node : Node) : Node | null {return node.parentElement;}
// 返回下一个节点没有返回null
function nextSibling(node : Node) : Node | null {return node.nextSibling;}
// 获取元素的标签名
function tagName(elm : Element) : string {return elm.tagName;}
// 设置内容
function setTextContent(node : Node, text : string | null) : void {
  node.textContent = text;
}
// 返回内容
function getTextContent(node : Node) : string | null {return node.textContent;}
// http://www.w3school.com.cn/jsref/prop_node_nodetype.asp
function isElement(node : Node) : node is Element {
  return node.nodeType === 1;
}
// 判断是否是文本节点
function isText(node : Node) : node is Text {
  return node.nodeType === 3;
}
// 判断是否是注释
function isComment(node : Node) : node is Comment {
  return node.nodeType === 8;
}

export const htmlDomApi = {
  createElement,
  createElementNS,
  createTextNode,
  createComment,
  insertBefore,
  removeChild,
  appendChild,
  parentNode,
  nextSibling,
  tagName,
  setTextContent,
  getTextContent,
  isElement,
  isText,
  isComment
} as DOMAPI;

export default htmlDomApi;