console.log('pure is running');
let origin = window.origin;
for (let i = document.scripts.length - 1; i >= 0; i--) {
  let script = document.scripts.item(i);
  if (
    !script.src
    || script.src.startsWith(origin)
  ) {
    continue;
  }
  console.log('remove script:', script.src);
  script.remove();
}
