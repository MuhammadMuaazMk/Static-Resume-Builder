
function toggleSection(sectionId){
    const section=document.getElementById(sectionId);
    const content=section?.querySelector(".section-content");
    const button=section?.querySelector(".toggle-btn");
    if(content){
        content.classList.toggle("hidden");
        if(button){
            button.textContent=content.classList.contains("hidden")?"Show":"Hide";
        }
    }
}
// Add event listeners to all toggle buttons
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        const section = button.closest('.resume-section');
        if (section) {
            button.addEventListener('click', () => {
                toggleSection(section.id);
            });
        }
    });
});

