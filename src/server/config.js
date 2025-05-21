export const API_URL =
  window.location.hostname === "localhost"
    ? "https://michellebsal-5500.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/test_med/src/server/"
    : "add your theia server side url";
console.log("API_URL :", API_URL);
