let title = document.getElementById('typing-txt');
let names = ["WEB DEVELOPER...", "PROGRAMMER...", "WEB DESIGNER...", "STUDENT AT IIT KGP..."];

let mainIndex = 0;
let index = 0;
let i = 0;

const typing = () => {

    let name = names[i];
   
    if (index <= name.length + 5) {
        let new_title = name.slice(0, mainIndex);
        title.innerText = new_title;
        mainIndex++;
        index++;
    }
    else {
        let new_title = name.slice(0 , mainIndex);
        title.innerText = new_title;
        mainIndex--;
    }
    if(mainIndex === 0){
        index = 0;
        i++;
    }
    if (i === names.length) {
        i = 0;
    }
    setTimeout(() => typing(), 60);
}

typing();

