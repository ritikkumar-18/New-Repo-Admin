import { post_data} from "./index.js"
  
export const updateCms = (payload) => post_data("/admin/add_edit_cms", payload)


