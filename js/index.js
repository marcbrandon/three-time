// Create full list of participants
let pList = [
    "Person&nbsp;1",
    "Person&nbsp;2",
    "Person&nbsp;3",
    "Person&nbsp;4",
    "Person&nbsp;5",
    "Person&nbsp;6",
    "Person&nbsp;7",
    "Person&nbsp;8",
    "Person&nbsp;9",
    "Person&nbsp;10",
    "Person&nbsp;11",
    "Person&nbsp;12",
    "Person&nbsp;13",
    "Person&nbsp;14",
    "Person&nbsp;15",
    "Person&nbsp;16",
    "Person&nbsp;17",
    "Person&nbsp;18",
];
console.log(pList);

// Write contents of the pList to the DOM
let pListNode = document.getElementById("pList");
pListNode.innerHTML = pList.join(", ");

// Place first third of the participant list into a new array and write contents to DOM
let gList1 = pList.slice(0, pList.length / 3);
let gList2 = pList.slice(pList.length / 3, (pList.length / 3) * 2);
let gList3 = pList.slice((pList.length / 3) * 2, pList.length);

for (let i = 0; i < pList.length / 3 + 1; i++) {
    // DEBUG: Echo loop number to console
    console.log("Generating week: " + (i + 1));

    // Declare variables and create elements
    let wList = document.getElementById("wList");
    let wrapper = document.createElement("div");
    let h2 = document.createElement("h2");

    // Append child elements to respective parents
    wList.appendChild(wrapper);
    wrapper.appendChild(h2);

    // Populate contents to the created elements
    h2.innerHTML = `Week ${i + 1}`;

    if (i === 0) {
        for (let j = 0; j < gList1.length / 3; j++) {
            let group = [gList1[3 * j], gList1[3 * j + 1], gList1[3 * j + 2]];
            let groupNode = document.createElement("p");
            wrapper.appendChild(groupNode);
            groupNode.innerHTML = `<strong>Group ${
                j + 1
            }</strong><br /> ${group.join("<br />")}`;
            console.log("Group" + j + ": " + group);
        }
        for (let k = 0; k < gList2.length / 3; k++) {
            let group = [gList2[3 * k], gList2[3 * k + 1], gList2[3 * k + 2]];
            let groupNode = document.createElement("p");
            wrapper.appendChild(groupNode);
            groupNode.innerHTML = `<strong>Group ${
                k + gList1.length / 3 + 1
            }</strong><br /> ${group.join("<br />")}`;
            console.log("Group" + k + ": " + group);
        }
        for (let l = 0; l < gList3.length / 3; l++) {
            let group = [gList3[3 * l], gList3[3 * l + 1], gList3[3 * l + 2]];
            let groupNode = document.createElement("p");
            wrapper.appendChild(groupNode);
            groupNode.innerHTML = `<strong>Group ${
                l + gList1.length / 3 + gList2.length / 3 + 1
            }</strong><br /> ${group.join("<br />")}`;
            console.log("Group" + l + ": " + group);
        }
    } else {
        for (let j = 0; j < gList3.length; j++) {
            let group = [gList1[j], gList2[j], gList3[j]];
            let groupNode = document.createElement("p");
            wrapper.appendChild(groupNode);
            groupNode.innerHTML = `<strong>Group ${
                j + 1
            }</strong><br /> ${group.join("<br />")}`;
            console.log("Group" + j + ": " + group);
        }
    }

    console.log("Week " + (i + 1) + " generated.");

    // Adjust group 2 and 3 array positions
    if (i > 0) {
        console.log(gList2);
        let head = gList2.shift();
        gList2.push(head);
        console.log("Head is: " + head);
        console.log("New group list: " + gList2);

        console.log(gList3);
        let tail = gList3.pop();
        gList3.unshift(tail);
        console.log("Tail is: " + tail);
        console.log("New group list: " + gList3);
    }
}
