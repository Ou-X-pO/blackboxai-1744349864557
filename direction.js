document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('[data-section]');

    // Function to switch tabs
    function switchTab(targetId) {
        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-card-blue', 'border-b-2', 'border-electric-blue', 'text-white');
            btn.classList.add('text-gray-400');
        });

        // Add active class to clicked button
        const activeButton = document.querySelector(`[data-tab="${targetId}"]`);
        if (activeButton) {
            activeButton.classList.remove('text-gray-400');
            activeButton.classList.add('active', 'bg-card-blue', 'border-b-2', 'border-electric-blue', 'text-white');
        }

        // Hide all sections
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show target section
        const targetSection = document.querySelector(`[data-section="${targetId}"]`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');
            switchTab(targetId);
        });
    });

    // Show system section by default
    switchTab('system');
});
