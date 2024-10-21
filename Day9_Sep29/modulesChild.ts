import{module_parent} from "./modules_Parents"
class module_child extends module_parent{
    id=1234
    emp_id="ab12"
}
const m=new module_child
console.log(m.emp_id)