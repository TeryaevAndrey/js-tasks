const a = () => {
  try {
    console.log("Start");

    return "res";
  } catch (err) {
    // код
  } finally {
    console.log("clear");
  }
};

a();
