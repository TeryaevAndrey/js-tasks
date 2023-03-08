const spy = (func) => {
  const wrapper = (...args) => {
    wrapper.calls.push(args);
    return func.apply(this, args);
  };

  wrapper.calls = [];

  return wrapper;
};
