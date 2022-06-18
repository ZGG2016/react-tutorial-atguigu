/*
	该文件专门为Count组件生成action对象
*/

import {INCEMENT} from "./constant";
import {DECEMENT} from "./constant";

export const createIncrementAction = data=>({type:INCEMENT,data})
export const createDecrementAction = data=>({type:DECEMENT,data})