let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/154390-12050G03I415.jpg') {
      myImage.setAttribute('src', 'images/14196807787_4eff602a09_b.jpg');
    } else {
      myImage.setAttribute('src', 'images/154390-12050G03I415.jpg');
    }
}