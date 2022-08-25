let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
    function: hideTakedownMusic,
  });
});
function hideTakedownMusic() {
  var music = document.getElementsByClassName('release-status down');
  for (let i=0; i<music.length ; i++)
  {
    music[i].parentElement.style.display = 'none';
  }
}