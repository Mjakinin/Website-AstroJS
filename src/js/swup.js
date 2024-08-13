import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";
const swup = new Swup({
animationSelector: '[class*="swuptransition-"]',
plugins: [new SwupScrollPlugin()],
});

swup.on("contentReplaced", init);