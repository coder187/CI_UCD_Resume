console.log("file loaded");

function sendMail(contactForm) {
    console.log("send mail started");
    
    emailjs.send("service_9qp215l", "template_8vop7od", {
        
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        project_request: contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    console.log("send mail complete");
    return false;  // To block from loading a new page
}