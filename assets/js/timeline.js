function setupTimeline(timelineIndex) {
    const timelineContainer = document.querySelectorAll('.timeline-container')[timelineIndex - 1]; 
    const milestones = timelineContainer.querySelectorAll('.milestone');
    const progressGlow = document.getElementById(`progressGlow${timelineIndex}`);
    const infoBox = document.getElementById(`infoBox${timelineIndex}`);

    let currentMilestoneIndex = 0; 


    function handleMilestoneHover(index) {
        const milestone = milestones[index];
        const progressPercentage = parseInt(milestone.style.left);
        progressGlow.style.width = `${progressPercentage}%`;

        const heading = milestone.getAttribute('data-heading');
        const text = milestone.getAttribute('data-text');

        infoBox.innerHTML = `<h3>${heading}</h3><p>${text}</p>`;
    }

  
    function slideThroughMilestones() {

        progressGlow.style.width = '0%';


        handleMilestoneHover(currentMilestoneIndex);


        currentMilestoneIndex++;


        if (currentMilestoneIndex >= milestones.length) {
            currentMilestoneIndex = 0;
        }
    }

 
    setInterval(slideThroughMilestones, 3000);
}

setupTimeline(1);
setupTimeline(2);
setupTimeline(3);
