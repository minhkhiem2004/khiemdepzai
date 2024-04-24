// Lấy phần tử select bằng id
var languageSelect = document.getElementById("language");

// Thêm sự kiện "change" cho phần tử select
languageSelect.addEventListener("change", function() {
    // Lấy giá trị của ngôn ngữ đã chọn
    var selectedLanguage = languageSelect.value;

    // Chuyển hướng đến trang tương ứng với ngôn ngữ đã chọn
    if (selectedLanguage === "en") {
        window.location.href = "index.html"; // Trang tiếng Anh
    } else if (selectedLanguage === "vi") {
        window.location.href = "index-vi.html"; // Trang tiếng Việt
    }
});

/* rankings */
document.addEventListener("DOMContentLoaded", function() {
    const playerNames = document.querySelectorAll(".player-name");

    playerNames.forEach(function(player) {
        player.addEventListener("click", function() {
            // Get player name and information
            const playerName = player.textContent.trim();
            const playerInfo = getPlayerInfo(playerName);

            // Display player details
            displayPlayerDetails(playerName, playerInfo);
        });
    });

    // Function to get player information (dummy data for demonstration)
    function getPlayerInfo(playerName) {
        // Here you would fetch the actual player information from a database or API
        // For demonstration, using a simple object
        const playerData = {
            "Novak Djokovic": "Novak Djokovic, born May 22, 1987, is a Serbian professional tennis player.",
            "Jannik Sinner": "Jannik Sinner, born May 22, 1987, is a Serbian professional tennis player.",
            "Roger Federer": "Roger Federer, born August 8, 1981, is a Swiss professional tennis player."
            // Add more players as needed
        };

        return playerData[playerName] || "Player information not found.";
    }

    // Function to display player details
    function displayPlayerDetails(playerName, playerInfo) {
        const playerDetailsContainer = document.getElementById("player-details");
        const playerNameElement = document.getElementById("player-name");
        const playerInfoElement = document.getElementById("player-info");

        // Update player details
        playerNameElement.textContent = playerName;
        playerInfoElement.textContent = playerInfo;

        // Show player details container
        playerDetailsContainer.classList.add("show");
    }

    // Hide player details when clicking outside of player details container
    document.addEventListener("click", function(event) {
        const playerDetailsContainer = document.getElementById("player-details");
        if (!playerDetailsContainer.contains(event.target)) {
            playerDetailsContainer.classList.remove("show");
        }
    });
});