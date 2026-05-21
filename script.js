const drugDatabase = {

    paracetamol: {
        dosage: "500mg to 1000mg every 4-6 hours.",
        sideEffects: "Nausea, rash, liver damage in overdose.",
        info: "Paracetamol is used to treat pain and fever."
    },

    ibuprofen: {
        dosage: "200mg to 400mg every 4-6 hours.",
        sideEffects: "Stomach pain, dizziness, nausea.",
        info: "Ibuprofen is a nonsteroidal anti-inflammatory drug."
    },

    aspirin: {
        dosage: "300mg once daily after meals.",
        sideEffects: "Bleeding, stomach upset, heartburn.",
        info: "Aspirin is used for pain relief and blood thinning."
    }

};

function searchDrug(){

    const input = document
        .getElementById("drugInput")
        .value
        .toLowerCase()
        .trim();

    const resultSection = document.getElementById("resultSection");

    if(drugDatabase[input]){

        document.getElementById("drugName").innerText = input.toUpperCase();

        document.getElementById("dosageText").innerText =
            drugDatabase[input].dosage;

        document.getElementById("sideEffectsText").innerText =
            drugDatabase[input].sideEffects;

        document.getElementById("infoText").innerText =
            drugDatabase[input].info;

        resultSection.style.display = "block";

    } else {

        document.getElementById("drugName").innerText =
            "Drug Not Found";

        document.getElementById("dosageText").innerText =
            "-";

        document.getElementById("sideEffectsText").innerText =
            "-";

        document.getElementById("infoText").innerText =
            "No information available.";

        resultSection.style.display = "block";
    }
}
