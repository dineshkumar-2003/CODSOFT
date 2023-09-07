window.addEventListener('load',()=>{
    const form=document.querySelector('#form1');
    const input=document.querySelector('#inp');
    const list_el=document.querySelector('#tasks');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task=input.value;
        if(!task){
            alert("please enter a task");
        }
        else{
        const task_el=document.createElement("div");
        task_el.classList.add("task");
       // const tock_el=document.createElement("img");
        //tock_el.src="D:\pics\checkbox_empty.png";
        //tock_el.setAttribute('height','50px');
        //tock_el.setAttribute('width','50px');
        //tock_el.className="tick";
        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);
        //task_el.appendChild(tock_el);
        //tock_el.appendChild(task_content_el);

        const task_input_el=document.createElement('input');
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_el);

        const task_actions_el=document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el=document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML="Edit";

        const task_delete_el=document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML="delete";
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_edit_el);
        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
        input.value="";

        task_edit_el.addEventListener('click',(e)=>{
            if(task_edit_el.innerText.toLowerCase()=="edit"){
                task_edit_el.innerText="save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                save();
            }
            else{
                task_edit_el.innertext="edit";
                task_input_el.setAttribute("readonly","readonly");
            }
        });
        task_delete_el.addEventListener('click',()=>{
            list_el.removeChild(task_el);
        });
        save();
    }
    })
})
function save(){
    localStorage.setItem("task",list_el.innerHTML);
}
function get(){
    list_el.innerHTML=localStorage.getItem("task");
}
get();