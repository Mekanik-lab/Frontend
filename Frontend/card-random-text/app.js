document.addEventListener("DOMContentLoaded", function() {
    function replaceText() {
        const textToReplace = [
            "Polska to kraj w Europie Środkowej, który ma długą historię i bogate dziedzictwo kulturowe. Jest członkiem Unii Europejskiej i NATO, z dynamicznie rozwijającą się gospodarką. Znana z pięknych krajobrazów, od Tatr po Bałtyk, oraz z tradycji, jak np. Wigilia, Pierogi i Solidarność.",
            "Stany Zjednoczone to jedno z najpotężniejszych państw na świecie, zarówno pod względem gospodarczym, jak i militarnym. Składają się z 50 stanów, zróżnicowanych klimatycznie i kulturowo. USA to kolebka innowacji technologicznych, przemysłowych oraz lider w produkcji filmowej, a także znaczący gracz na arenie międzynarodowej.",
            "Rosja to kraj o powierzchni ponad 17 milionów km², rozciągający się przez dwa kontynenty – Europę i Azję. Charakteryzuje się bogatymi zasobami naturalnymi i potężną armią. Ma burzliwą historię, od carów po ZSRR, a teraz jest ważnym graczem politycznym i wojskowym na świecie.",
            "Chiny to najludniejszy kraj świata i druga największa gospodarka. Kultura sięgająca tysięcy lat ma ogromne znaczenie w historii ludzkości. Dzięki rozwoju technologii, stają się liderem w produkcji, sztucznej inteligencji i przestrzeni kosmicznej. Zajmują także ważne stanowisko w polityce globalnej i handlu.",
            "Brazylia to kraj o ogromnej powierzchni, znany z Amazońskiej dżungli, karnawału, piłki nożnej i samby. Jest największym państwem Ameryki Łacińskiej, a jego gospodarka opiera się na rolnictwie, przemyśle i wydobyciu surowców. Brazylijczycy słyną z radości życia i gościnności. Klimat tropikalny wpływa na różnorodność ekologiczną."
        ];

        // Nasłuchujemy kliknięcia przycisku
        document.querySelector("#button__text--replace").addEventListener("click", function() {
            let textIndex = Math.floor(Math.random() * textToReplace.length);
            const text = textToReplace[textIndex];
            document.querySelector("#text").textContent = text;
            document.querySelector("#card").style.width = "100%";
        });
    }

    replaceText();
});