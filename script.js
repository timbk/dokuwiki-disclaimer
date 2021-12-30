/**
 * Support scripts that hide the disclaimer box if:
 * - namespace is not on the target list
 * - the document was not rendered in the main body box (e.g. navigation box)
 */

// go through all disclaimer boxes in the document
var boxes = document.getElementsByClassName("disclaimer_box");

// going backwords because remove() seems to affect the length of boxes
for(var idx=(boxes.length-1); idx>=0; idx--) {
    var target_namespace = boxes[idx].dataset.disclaimerNs;
    console.debug(idx, "Target Namespace", target_namespace);

    // remove if not in main body
    if (boxes[idx].parentNode.id != "bodyContent") {
        boxes[idx].remove();
        continue;
    }

    // remove if we are not in one of the selected namespaces
    if ( (target_namespace != "*") && (!target_namespace.split(',').includes(NS)) ) {
        boxes[idx].remove();
        continue;
    }
}

console.debug(boxes, NS);
