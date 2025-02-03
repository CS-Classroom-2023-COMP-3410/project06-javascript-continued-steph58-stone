document.addEventListener("DOMContentLoaded", function () {
    const storyContainer = document.getElementById("story");
    const choicesContainer = document.getElementById("choices");

    function updateStory(text, choices) {
        storyContainer.innerText = text;
        choicesContainer.innerHTML = "";

        choices.forEach(choice => {
            const choiceContainer = document.createElement("div");
            choiceContainer.classList.add("choice-container");
            
            const flowerIcon = document.createElement("span");
            flowerIcon.classList.add("flower-icon");
            flowerIcon.innerText = "🌸";
            
            const choiceButton = document.createElement("button");
            choiceButton.classList.add("choice-button");
            choiceButton.innerText = choice.text;
            choiceButton.addEventListener("click", choice.action);
            
            choiceContainer.appendChild(flowerIcon);
            choiceContainer.appendChild(choiceButton);
            choicesContainer.appendChild(choiceContainer);
        });
    }

    updateStory("You find yourself in a lush garden, filled with vibrant flowers and towering trees. Where do you go next?", [
        { text: "Follow the winding path", action: () => alert("Path chosen") },
        { text: "Explore the mysterious forest", action: () => alert("Forest chosen") }
    ]);
});
