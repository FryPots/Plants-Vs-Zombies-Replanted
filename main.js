function print(text) {
  console.log(text);
}

function setPixelSize() {
  const ROOT = document.documentElement;
  const VH = window.innerHeight;
  print("Viewport height: " + VH);
  const pixelSize = VH / 256;
  ROOT.style.setProperty("--pixel-size", pixelSize);
}

window.addEventListener("resize", setPixelSize);
window.addEventListener("DOMContentLoaded", setPixelSize);
