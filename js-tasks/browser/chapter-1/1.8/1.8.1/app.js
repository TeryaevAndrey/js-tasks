const showNotification = (options) => {
  let notification = document.createElement("div");
  notification.className = "notification";

  if (options.className) {
    notification.classList.add(options.className);
  }

  notification.style.position = "fixed";
  notification.style.top = options.top + "px";
  notification.style.right = options.right + "px";

  notification.innerHTML = options.html;

  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
};

showNotification({ top: 10, right: 10, html: "Hello", className: "welcome" });
