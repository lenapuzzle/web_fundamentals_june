function incrementLike(id) {
  var element = document.querySelector(id);
  var likeCount = Number(element.innerText);
  likeCount++;
  element.innerText = likeCount;
}