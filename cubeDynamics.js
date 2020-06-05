
let scaleCube = (scaleNum, groupBlocks) => {
    // here we scale the referenceCube which is used to generate all the others in svg.
    let referenceCube = document.getElementById("cube");
    referenceCube.setAttribute("transform", `scale(${scaleNum})`);
    // set the amplitude of the movement
    let value = 24*scaleNum;
    document.documentElement.style.setProperty('--up', `${-value}px`);
    document.documentElement.style.setProperty('--down', `${value}px`);

    document.documentElement.style.setProperty('--upHigh', `${-value*2}px`);
    document.documentElement.style.setProperty('--downHigh', `${value*2}px`);
    // here we get the cubes separated by 3 groups of 9 (called "base", "middle", "top")
    let blocks = [];
    for (var i = 0; i < groupBlocks.childNodes.length; i++) {
        if (groupBlocks.childNodes[i].nodeName != "#text") {
            blocks.push(groupBlocks.childNodes[i]);
        }
    }
    for (let block of blocks) {

        let x = block.getAttribute("x");
        let y = block.getAttribute("y");

        block.setAttribute("x", x * scaleNum);
        block.setAttribute("y", y * scaleNum);
    }
}

let scale = (scaleNum) => {
    let svg = document.getElementById("canvas");
    let groups = [];
    for (var i = 0; i < svg.childNodes.length; i++) {
        if (svg.childNodes[i].nodeName != "#defs") {
            groups.push(svg.childNodes[i]);
        }
    }
    for (let block of groups) {
        scaleCube(scaleNum, block);
    }
}

scale(0.25);
