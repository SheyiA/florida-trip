document.addEventListener("DOMContentLoaded", () => {
    const transitionScreen = document.getElementById("transition-screen");

    // Remove transition screen after animation ends
    transitionScreen.addEventListener("animationend", () => {
        transitionScreen.classList.add("hidden");
        document.body.style.overflow = "auto"; // Re-enable scrolling
    });
});