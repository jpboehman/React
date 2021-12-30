// Tip -> Ternary operator
const active = true;
let display = active ? 'bold' : 'normal'


// Tip -> Short Circuiting
// Short-Circuiting is used to bypass information checks by placing the most relevant information first
const image = {
  path: 'foo/bar.png',
};

function getIconPath(icon) {
  const path = icon.path ? icon.path : 'uploads/default.png';
  return `https://assets.foo.com/${path}`;
}

console.log(getIconPath(image));

