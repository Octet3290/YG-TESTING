function setupTimeline(timelineIndex) {
    const timelineContainer = document.querySelectorAll('.timeline-container')[timelineIndex - 1]; // Correct 1-based index
    const milestones = timelineContainer.querySelectorAll('.milestone');
    const progressGlow = document.getElementById(`progressGlow${timelineIndex}`);
    const infoBox = document.getElementById(`infoBox${timelineIndex}`);

    milestones.forEach((milestone) => {
        milestone.addEventListener('mouseenter', () => {
            const progressPercentage = parseInt(milestone.style.left);
            progressGlow.style.width = `${progressPercentage}%`;

            const heading = milestone.getAttribute('data-heading');
            const text = milestone.getAttribute('data-text');

            infoBox.innerHTML = `<h3>${heading}</h3><p>${text}</p>`;
        });
    });

    timelineContainer.addEventListener('mouseleave', () => {
        progressGlow.style.width = '0%';
        
    });
}

setupTimeline(1);
setupTimeline(2);
setupTimeline(3);