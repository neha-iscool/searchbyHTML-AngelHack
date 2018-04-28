function getClickHandler() {
  return function(info, tab) {
  };
};
window.addEventListener("load", initialize);
function initialize(){
    if(jQuery){
        alert('yes');
    }else{
        alert('no');
    }
    jQuery('body').hide();
}

chrome.contextMenus.create({
  "title" : "Get Popip",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});
