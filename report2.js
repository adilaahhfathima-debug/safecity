const form = document.getElementById("reportForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    try {

        const response = await fetch("http://localhost:5000/api/reports/submit", {

            method: "POST",
            body: formData

        });

        const data = await response.json();

        alert("Report Submitted Successfully!");

        console.log(data);

        form.reset();

    } catch (error) {

        console.log(error);

        alert("Error submitting report.");

    }

});
