// JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
    // Slide in the profile picture from the right
    const profilePicture = document.querySelector('.profile-picture');
    profilePicture.style.animation = 'slideFromRight 1s ease';

    // Fade in the profile description
    const profileDescription = document.querySelector('.profile-description');
    profileDescription.style.animation = 'fadeIn 1s ease';

    // Animate skills icons on scroll
    const skillsSection = document.getElementById('skills');
    let skillsAnimated = false;
    window.addEventListener('scroll', function() {
        // console.log('Scroll event triggered');
        if (isInViewport(skillsSection)) {
            animateSkills();
            skillsAnimated = true; // Set flag to true once animation is triggered
        }
    });
    const projectsSection = document.getElementById('projects')
    let projectsAnimated = false;
    window.addEventListener('scroll', function() {
        // console.log('Scroll event triggered');
        if (isInViewport(projectsSection)) {
            animateProjects();
            projectsAnimated = true; // Set flag to true once animation is triggered
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSkills() {
        const skills = document.querySelectorAll('.skill');
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.animation = 'flipInX 1s ease';
            }, index * 200);
        });
    }
    function animateProjects() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.classList.add('animated'); // Add the animated class
        });
    }
});

