function delayedValue(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(value);
      } else {
        reject("No value provided");
      }
    }, delay);
  });
}

async function fetchValue() {
  try {
    const result = await delayedValue("Hello, World!", 2000);
    console.log("Resolved value:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchValue();
