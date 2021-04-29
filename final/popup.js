     
     // Save text area value every time it changes
     document.addEventListener('DOMContentLoaded', function() {
     document.getElementById("area").addEventListener("input", save);
    });
    
    function save() {
    var textarea = document.getElementById("area").value;
    chrome.storage.sync.set({"data": textarea});
    }
    
    // Store text changes, show if nothing is set yet
    chrome.storage.sync.get(["data"], function(result) {
         if (typeof result.data == "undefined" || result.data == null)
         {
               document.getElementById("area").innerHTML = "";
         }
         else
         {
               document.getElementById("area").innerHTML = result.data;
         }
     });

     // Clear text and storage if button is clicked
     document.addEventListener('DOMContentLoaded', function() {
     document.getElementById("button").addEventListener("click", erase);
    });
    
    function erase () {
     document.getElementById("area").value = "";
     chrome.storage.sync.set({"data": null});
    }