window.addEventListener("load", function () {
    const hamburguer = document.getElementById("hamburguer");
    hamburguer.addEventListener("click", function () {
        document.querySelector('.nav-container').classList.toggle('active');
        hamburguer.classList.toggle("fa-bars");
        hamburguer.classList.toggle("fa-xmark");
    });



    const menuList = document.getElementById('menu');
    const navContainer = document.querySelector('.nav-container');

    window.addEventListener('scroll', function () {
        if (window.innerWidth > 770) {
            if (window.scrollY > 30) {
                navContainer.classList.add('efecto-menu-conatainer');
                menuList.classList.add('menu-list-padding');
            } else {
                navContainer.classList.remove('efecto-menu-conatainer');
                menuList.classList.remove('menu-list-padding');
            }
        } else {
            navContainer.classList.remove('efecto-menu-conatainer');
            menuList.classList.remove('menu-list-padding');
        }
    });
    const thumbsIcons = document.querySelectorAll(".container-thumbs i");
    const thankYouMessage = document.getElementById("thankYouMessage");
    thumbsIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            thumbsIcons.forEach(icon => icon.classList.remove("selected"));

            icon.classList.add("selected");

            thankYouMessage.style.display = "block";
        });
    });
    const modal = document.getElementById('modal');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const modalTimeout = 3600000;
    const modalContent = document.querySelector('.modal-content');
    function showModal() {
        const currentTime = new Date().getTime();

        const lastModalHideTime = localStorage.getItem('modalHideTime');

        if (!lastModalHideTime || (currentTime - lastModalHideTime > modalTimeout)) {
            modalContent.innerHTML = `
            <p>Después de leer esta información,</p>
            <h2>¿vas a consultarle a tu médico acerca del VSR?</h2>
            <div class="buttons-container-modal">
                <button id="noBtn">No</button>
                <button id="yesBtn">Sí</button>
            </div>
        `;

        // Asignamos los eventos de clic a los nuevos botones en cada apertura
        document.getElementById('noBtn').addEventListener('click', () => showMessageAfterResponse('No'));
        document.getElementById('yesBtn').addEventListener('click', () => showMessageAfterResponse('Sí'));

        modal.style.display = 'flex';
        localStorage.removeItem('modalHideTime');
            
        } else {
            console.log("El modal ya fue mostrado en esta sesión y no ha pasado el tiempo suficiente.");
        }
    }
    function showMessageAfterResponse(response) {
        const modalContent = document.querySelector('.modal-content');
        console.log(response);
        if (response === 'No') {
            modalContent.innerHTML = `
           <p> <strong>¡Gracias por tu respuesta!</strong></p>
            <p>Haber llegado hasta acá es el primer paso. Siempre podés consultar con el médico cuando estés listo/a.</p>
            <button id="closeModalBtn">Cerrar</button>
        `;
        } else if (response === 'Sí') {
            modalContent.innerHTML = `
            <p> <strong>¡Gracias por tu respuesta!</strong></p>
            <p>Hablar con el médico es un gran paso para proteger tu salud.</p>
            <button id="closeModalBtn">Cerrar</button>
        `;
        } else {
            modalContent.innerHTML = `
            <p>Después de leer esta información,</p>
            <h2>¿vas a consultarle a tu médico acerca del VSR?</h2>
            <div class="buttons-container-modal">
                <button id="noBtn">No</button>
                <button id="yesBtn">Sí</button>
        `;
        }

        document.getElementById('closeModalBtn').addEventListener('click', hideModal);
    }

    function hideModal() {
        const currentTime = new Date().getTime();
        localStorage.setItem('modalHideTime', currentTime);
        modal.style.display = 'none';
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 1850) {             
            showModal();
        }
    });

    yesBtn.addEventListener('click', function () {
        showMessageAfterResponse('Sí');
    });

    noBtn.addEventListener('click', function () {
        showMessageAfterResponse('No');
    });

    
    document.querySelector('.references').addEventListener('click', function () {
        let referencias = document.getElementById('referencias');
        referencias.classList.toggle('show');

        let icon = this.querySelector('#toggle-icon i');
        if (referencias.classList.contains('show')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
    document.querySelector('#button-pdf').addEventListener('click', function () {
        const loader = document.createElement("span");
        loader.classList.add("loader");
        const svg = this.querySelector("svg");
        svg.style.display = 'none';
        this.querySelector('.button__pdf').appendChild(loader);
        loader.style.display = 'inline-block';

        setTimeout(() => {
            const link = document.createElement("a");
            link.href = "assets/pdf/VSR-Preguntas.pdf";
            link.download = "VSR-Preguntas.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            loader.remove();
            svg.style.display = 'inline-block';
        }, 1000);
    });



});
