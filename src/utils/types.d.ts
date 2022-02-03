import type { Ref } from 'vue'
export interface IRefs {
    [key: string]: Ref<HTMLElement | undefined>;
    inputRef?: Ref<HTMLInputElement | undefined>
}
export interface IContext {
    parenNode?: any;
    onlyOneNode?: any;
    data?: any;
    cloneNodeDrag?: any;
    keys?: any;
}
export interface INode {
    [key: string]: any;
}
export interface IBounds {
    [key: string]: number | null;
}
export interface IMousePosition {
    [key: string]: number;
}
export interface IKeys {
    id: string;
    pid: string;
    label: string;
    expand: string;
    children: string;
}
