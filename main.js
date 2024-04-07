let queue = [];
for (let stack of Array.from(document.querySelectorAll(".stack")).filter((e,i)=>i%2==0)){
    for (let assignment of Array.from(Array.from(stack.children).at(-1).children).slice(1)){
        queue.push(assignment.children[0].children[0].children[0].children[0].children[1].children[0].children[0].href + ".zip");
    }
}
setInterval(()=>{window.open(queue.shift())}, 500);
