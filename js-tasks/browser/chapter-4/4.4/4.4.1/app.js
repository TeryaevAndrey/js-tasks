const showCover = () => {
  let coverDiv = document.createElement("div");
  coverDiv.id = "cover-div";

  document.body.style.overflowY = "hidden";

  document.body.append(coverDiv);
};

const hideCover = () => {
  document.getElementById("cover-div").remove();
  document.body.style.overflowY = "";
};

const showPrompt = (text, callback) => {
  showCover();
  let form = document.getElementById("prompt-form");
  let container = document.getElementById("prompt-form-container");
  document.getElementById("prompt-message").innerHTML = text;
  form.text.value = "";

  const complete = (value) => {
    hideCover();
    container.style.display = "none";
    document.onkeydown = null;
    callback(value);
  };

  form.onsubmit = () => {
    let value = form.text.value;
    if (value == "") return false;

    complete(value);
    return false;
  };

  form.cancel.onclick = () => {
    complete(null);
  };

  document.onkeydown = (e) => {
    if (e.key == "Escape") {
      complete(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = (e) => {
    if (e.key == "Tab" && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = (e) => {
    if (e.key == "Tab" && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = "block";
  form.elements.text.focus();
};

document.getElementById("show-button").onclick = function () {
  showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert("Вы ввели: " + value);
  });
};
