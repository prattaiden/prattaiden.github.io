
document.addEventListener("DOMContentLoaded", function() {


    //projects
    function toggleMouseOverProject(image, label, isVis, isColor) {
        label.style.visibility = isVis ? 'visible' : 'hidden';
        label.style.transition = 'transform 0.3s ease-in-out';
        image.style.transform = isVis ? 'scale(1.1)' : 'scale(1)';
        image.style.transition = 'transform 0.3s ease-in-out';
        image.style.border = isVis ? '2px solid #ea651b' : 'hidden';
        if(isColor){
            image.classList.add('BW');
        }else{
            image.classList.remove('BW');
        }
    }

    //tri elements
    let myExtensionIMG = document.getElementById("extensionImage");
    let triCalcLabel = document.getElementById("triCalc");

    //maze elements
    let myPuzzleIMG = document.getElementById("puzzleImage");
    let puzzleLabel = document.getElementById("mazeSolver");

    //synth
    let mySynthIMG = document.getElementById("synthImage");
    let synthLabel = document.getElementById("Synthesizer");

    //server
    let myServerIMG = document.getElementById("serverImage");
    let serverLabel = document.getElementById("Server");

    //chat android
    let androidIMG = document.getElementById("androidImage");
    let androidLabel = document.getElementById("Android");


    myExtensionIMG.addEventListener("mouseover", function (){
        toggleMouseOverProject(myExtensionIMG, triCalcLabel, true, false);
    });

    myExtensionIMG.addEventListener("mouseout", function (){
        toggleMouseOverProject(myExtensionIMG, triCalcLabel, false, true)
    });

    myPuzzleIMG.addEventListener("mouseover", function (){
        toggleMouseOverProject(myPuzzleIMG, puzzleLabel, true, false);
    });

    myPuzzleIMG.addEventListener("mouseout", function (){
        toggleMouseOverProject(myPuzzleIMG, puzzleLabel, false, true);
    });

    mySynthIMG.addEventListener("mouseover", function (){
        toggleMouseOverProject(mySynthIMG, synthLabel, true, false);
    });

    mySynthIMG.addEventListener("mouseout", function (){
        toggleMouseOverProject(mySynthIMG, synthLabel, false, true);
    });

    myServerIMG.addEventListener("mouseover", function (){
        toggleMouseOverProject(myServerIMG, serverLabel, true, false);
    });

    myServerIMG.addEventListener("mouseout", function (){
        toggleMouseOverProject(myServerIMG, serverLabel, false, true);
    });

    androidIMG.addEventListener("mouseover", function (){
        toggleMouseOverProject(androidIMG, androidLabel, true, false);
    });

    androidIMG.addEventListener("mouseout", function (){
        toggleMouseOverProject(androidIMG, androidLabel, false, true);
    });




    //color
    function toggleColor(image, isColor){
        if(isColor){
            image.classList.add('BW');
        }else{
            image.classList.remove('BW');
        }
    }

    //links
    let strava = document.getElementById("stravaImage");
    let linkedIn = document.getElementById("linkedInImage");

    strava.addEventListener("mouseover", function (){
        toggleColor(strava, false);
    });
    strava.addEventListener("mouseout", function (){
        toggleColor(strava, true);
    });

    linkedIn.addEventListener("mouseover", function (){
        toggleColor(linkedIn, false);
    });
    linkedIn.addEventListener("mouseout", function (){
        toggleColor(linkedIn, true);
    });



    //about
    let aboutButton = document.getElementById("aboutButton");
    let aboutSection = document.getElementById("aboutSection");
    let closeAboutBTN = document.getElementById("closeAbout");
    let contact = document.getElementById("email");

    aboutButton.addEventListener('click',function(){
        aboutSection.style.display = 'block';
    });

    closeAboutBTN.addEventListener('click', function (){
        aboutSection.style.display = 'none';
    });


    contact.addEventListener('mouseover', function (){
        contact.style.color = "#ea651b";
    });

    contact.addEventListener('mouseout', function (){
        contact.style.color = "#ffffff";
    });

    aboutButton.addEventListener('mouseover', function (){
        aboutButton.style.color = "#ea651b";
    });

    aboutButton.addEventListener('mouseout', function (){
        aboutButton.style.color = "#ffffff";
    });

    //popup for email copying
    contact.addEventListener('click', function (event) {
        // Retrieve the email from the data attribute
        let emailText = contact.getAttribute("data-email");

        // Copy the email to the clipboard
        let tempInput = document.createElement("input");
        tempInput.value = emailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        // Calculate the position of the button
        let buttonRect = contact.getBoundingClientRect();
        let buttonTop = buttonRect.top + window.scrollY;

        // Display a pop-up message above the button
        let popup = document.createElement("div");
        popup.innerText = "Email copied";
        popup.style.position = "absolute";
        popup.style.top = buttonTop - 40 + "px"; // Adjust as needed
        popup.style.left = buttonRect.left + "px";
        popup.style.color = "#ea651b";
        popup.style.padding = "5px";
        popup.style.zIndex = "9999";
        document.body.appendChild(popup);

        // Remove the pop-up after a few seconds
        setTimeout(function () {
            document.body.removeChild(popup);
        }, 3000);

        // Prevent the default action of the button click
        event.preventDefault();
    });


});
