let button4=document.getElementById("button4")
let head2_hide=document.getElementById("head2_hide")
function showhide() {
    if (button4.innerHTML=="menu") {
        head2_hide.style.top="0%"
        button4.innerHTML="cancle"
    }else{
        button4.innerHTML="menu"
        head2_hide.style.top="-1500%"
       
    }
   
    
}