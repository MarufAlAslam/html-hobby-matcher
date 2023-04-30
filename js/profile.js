
// Get user data from local storage
const avatarUrl = localStorage.getItem('avatar');
const userAvatar = document.getElementById('userAvatar');

// Set user avatar
userAvatar.src = avatarUrl;


function upload(){
  var file = document.getElementById('finput');
  var form = new FormData();

  form.append("image", file.files[0])
  
  var settings = {
    "url": "https://api.imgbb.com/1/upload?key=bcc56bad76ece711720725d2a509d3dc",
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };
  
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var jx = JSON.parse(response);
    localStorage.setItem('avatar', jx.data.url);
    userAvatar.src = jx.data.url;
    console.log(jx.data.url);
  });
}



// set hobbies
const hobiesField = document.getElementById('hobiesField');
hobiesField.innerHTML = localStorage.getItem('hobbies');


// updateHobbies
function updateHobies(){
  const hobbies = document.getElementById('hobbies').value;
  localStorage.setItem('hobbies', hobbies);
  console.log(hobbies);
}


// set bios
const biofield = document.getElementById('biofield');
biofield.innerHTML = localStorage.getItem('bio');

// update bio
function updateBio(){
  const bio = document.getElementById('myBio').value;
  localStorage.setItem('bio', bio);
  console.log(bio);
}