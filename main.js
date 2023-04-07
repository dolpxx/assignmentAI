function generateSentence() {
    var prerequisites = document.getElementById("prerequisites").value;
    var age = document.getElementById("age").value;

    var output = document.getElementById("output");

    if (age < 10) {
        output.innerHTML = "My favorite animal is a dog. They are very cute and playful.";
    } else if (age < 16) {
        output.innerHTML = "I enjoy playing video games in my free time. They are a great way to relax and have fun.";
    } else {
        output.innerHTML = "The impact of social media on our society is a topic of much debate. While some argue that it has brought people closer together, others claim that it has led to increased isolation and disconnection.";
    }
}
