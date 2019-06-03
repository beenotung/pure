console.debug('pure is running');

function getHost(url) {
  let a = document.createElement('a');
  a.href = url;
  return a.hostname;
}

let originHost = getHost(window.origin);
// console.log('originHost:', originHost);
// console.log('number of scripts:', document.scripts.length);
for (let i = document.scripts.length - 1; i >= 0; i--) {
  let script = document.scripts.item(i);
  if (!script.src) {
    continue;
  }
  let host = getHost(script.src);
  if (
    !(
      host.includes('ads')
      || host.includes('analytics')
    ) && (
      host.endsWith(originHost)
      || host.includes('cdn')
      || host.includes('static')
    )
  ) {
    continue;
  }
  console.log('remove script:', script.src);
  script.remove();
}
