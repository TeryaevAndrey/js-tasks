const throttle = (func, ms) => {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  const wrapper = () => {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;

      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  };

  return wrapper;
};
