flag = 0;
flag1 = 0; 
function active(a) {
    
    if(flag == 0){
        var x = document.getElementById("active");
        x.classList.remove("highcolor");
        a.classList.add("highcolor");
        flag = 1;
    }
    else{
        var b = document.querySelector(".highcolor");
        console.log(b.classList);
        b.classList.remove("highcolor");
        a.classList.add("highcolor");
        
    }
}

function collap() {
    var f = document.querySelector(".collapse");
    console.log(f);
    if (flag1 === 0){
        f.classList.add("show");
        flag1 = 1;
    }
    else if (flag1 === 1){
        f.classList.remove("show");
        flag1 = 0;
    }
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    console.log(x.className);
    if (x.className === "topnav sticky-top") {
        x.className += " responsive";
    } else {
        x.className = "topnav sticky-top";
    }
}



function slide(x) {
    x.classList.add("anim");
}

function normal(x) {
    x.classList.remove("anim");
}

function clicked() {
    var subwrap = document.getElementById('subwrap');
    var xyz = document.getElementById("xyz");
    console.log(window.innerWidth);
    if(window.innerWidth < 1000) {
            div.setAttribute("style", "background-color: white; width: 100%;");
            newul.appendChild(li0);
            newul.appendChild(li1);
            newul.appendChild(li2);
            newul.appendChild(li3);

            newul.setAttribute("style", "display: grid");
            div.appendChild(newul);
        if(flag == 0){
            subwrap.appendChild(div);
            console.log(div);
            xyz.setAttribute("style", "position: relative; top: 120px");
            flag = 1;
        }
        else if (flag == 1){        
            subwrap.removeChild(div);    
            xyz.setAttribute("style", "top: 0px");
            flag = 0;
        }
    }
    else {
        
    }
}