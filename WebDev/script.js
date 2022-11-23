function add(){
    var title=document.List.title.value;
    var desc=document.List.desc.value;
    var tr=document.createElement('tr');
    if(title==""||desc==""){
        alert("Enter all the values pls!");
    }
    else{
        var td1=tr.appendChild(document.createElement('td'));
        var td2=tr.appendChild(document.createElement('td'));
        var td3=tr.appendChild(document.createElement('td'));

        td1.innerHTML=title;
        td2.innerHTML=desc;
        td3.innerHTML='<input type="button" class="btn" name="del" value="Delete" onclick="del(this);"></input>';

        document.getElementById("tbl").appendChild(tr);
    }
}
function del(val){
    var s=val.parentNode.parentNode;
    s.parentNode.removeChild(s);
}