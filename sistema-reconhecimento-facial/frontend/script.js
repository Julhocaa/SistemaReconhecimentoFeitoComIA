const URL = "./my_model/";

let model;
let webcam;
let maxPredictions;

const startBtn = document.getElementById("start-btn");
const resultBox = document.getElementById("result-box");
const statusText = document.getElementById("status");

startBtn.addEventListener("click", init);

async function init() {

    try {

        statusText.textContent = "Carregando modelo...";

        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        model = await tmImage.load(modelURL, metadataURL);

        maxPredictions = model.getTotalClasses();

        const flip = true;

        webcam = new tmImage.Webcam(320, 320, flip);

        await webcam.setup();
        await webcam.play();

        window.requestAnimationFrame(loop);

        document
            .getElementById("webcam-container")
            .appendChild(webcam.canvas);

        statusText.textContent = "Sistema iniciado.";

        startBtn.disabled = true;

    } catch (error) {

        console.error("ERRO:", error);

        statusText.textContent =
            "Erro ao iniciar câmera/modelo.";

        startBtn.disabled = false;
    }
}

async function loop() {

    webcam.update();

    await predict();

    window.requestAnimationFrame(loop);
}

async function predict() {

    const prediction = await model.predict(webcam.canvas);

    let bestClass = "";
    let bestProbability = 0;

    for (let i = 0; i < maxPredictions; i++) {

        if (prediction[i].probability > bestProbability) {

            bestProbability = prediction[i].probability;
            bestClass = prediction[i].className;
        }
    }

    const percent = (bestProbability * 100).toFixed(2);

    if (bestProbability >= 0.85) {

        resultBox.innerHTML = `
            <h2>Objeto Detectado</h2>
            <p><strong>${bestClass}</strong></p>
            <p>Confiança: ${percent}%</p>
        `;

        resultBox.className = "success";

    } else {

        resultBox.innerHTML = `
            <h2>Nenhum objeto identificado</h2>
            <p>Confiança insuficiente</p>
        `;

        resultBox.className = "danger";
    }
}
