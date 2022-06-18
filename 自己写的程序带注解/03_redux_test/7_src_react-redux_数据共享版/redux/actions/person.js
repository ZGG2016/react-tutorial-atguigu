import {ADDPERSON} from "../constant"

// 3. 创建 Person 组件对应的 Action
export const createAddpersonAction = personObj => ({type:ADDPERSON,data:personObj})


