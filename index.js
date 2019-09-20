function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
    const divs = document.querySelectorAll("#grand-node div");
    return divs[divs.length - 1]
}
function increaseRankBy(n)
