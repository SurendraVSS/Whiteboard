// var request = require("request");
// var options = {
//   "method": "POST",
//   "url": "https://api.netless.link/v5/tokens/rooms/029e6cf03a9111ee9e6241209ace6cf9",
//   "headers": {
//     "token": "NETLESSSDK_YWs9ZE5XVTFueGlHeGc4ZjRyRiZub25jZT0wNjcyODY3MC0zYmYxLTExZWUtOWEyYi01N2Q0N2ZjODIwMTgmcm9sZT0wJnNpZz1hZDkwYzJlYTA3MmM4YTY5MThlYzIwYTQ0NjRjMWZjZTQyMGM4Yjk4MDMxODc0Njc2MzcwOGI1NTNhNjk2ZDA3",
//     "Content-Type": "application/json",
//     "region": "us-sv"
//   },
//   body: JSON.stringify({ "lifespan": 3600000, "role": "admin" })

// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

var whiteWebSdk = new WhiteWebSdk({
  // Pass in your App Identifier.
  appIdentifier: "y69tMDqPEe6qg3_eoBUomQ/AHdW4z1QWXS0Xg",
  // Set the data center as Silicon Valley, US.
  region: "us-sv",
})

var joinRoomParams = {
  uuid: "029e6cf03a9111ee9e6241209ace6cf9",
  // The unique identifier of a user. If you use versions earlier than v2.15.0, do not add this line.
  uid: "user uid",
  roomToken: "NETLESSROOM_YWs9ZE5XVTFueGlHeGc4ZjRyRiZleHBpcmVBdD0xNjkyMTk1MjA0NTkyJm5vbmNlPTE2OTIxOTE2MDQ1OTIwMCZyb2xlPTAmc2lnPTViYmNhMTY2MzIzYjE0NDdmMDZmOWIxMDRkMmQ5Y2M0MjMzNGIxMzRlZmExMjRkOTMyZWQwMjQxNTBkNzBmMDImdXVpZD0wMjllNmNmMDNhOTExMWVlOWU2MjQxMjA5YWNlNmNmOQ",
};

// Join the whiteboard room and display the whiteboard on the web page.
whiteWebSdk.joinRoom(joinRoomParams).then(function (room) {
  room.bindHtmlElement(document.getElementById("whiteboard"));

  // Define a toolbar and buttons.
  var toolbar = document.getElementById("toolbar");
  var toolNames = ["clicker", "selector", "rectangle", "eraser", "text", "arrow", "ellipse", "hand", "laserPointer", "shape", "straight"];

  for (var idx in toolNames) {
    var toolName = toolNames[idx];
    var btn = document.createElement("BUTTON");
    btn.setAttribute("id", "btn" + toolName);
    var t = document.createTextNode(toolName);
    btn.appendChild(t);

    // Listen for the event of clicking a button.
    btn.addEventListener("click", function (obj) {
      var ele = obj.target;
      // Call the setMemberState method to set the whiteboard tool.
      room.setMemberState(
        {
          currentApplianceName: ele.getAttribute("id").substring(3),
          shapeType: "pentagram",
          strokeColor: [255, 182, 200],
          strokeWidth: 18,
          textSize: 40,
        });
    });
    toolbar.appendChild(btn);
    console.log(btn.getAttribute("id"));
  }



}).catch(function (err) {
  console.error(err);
});



// App identifier : y69tMDqPEe6qg3_eoBUomQ/AHdW4z1QWXS0Xg
// Ak :dNWU1nxiGxg8f4rF
// Sk : xUar_46V2SJeGRkocmhOg96t6Kj8Pt5y
// {"uuid":"029e6cf03a9111ee9e6241209ace6cf9","teamUUID":"y69tMDqPEe6qg3_eoBUomQ","appUUID":"AHdW4z1QWXS0Xg","isRecord":false,"isBan":false,"createdAt":"2023-08-14T10:54:58.402Z","limit":0}
