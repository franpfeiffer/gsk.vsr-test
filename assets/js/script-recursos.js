window.addEventListener("load", function () {
    const boxSelector = document.querySelectorAll('.box__opciones');
    const acordeons = document.querySelectorAll('.acordeon--lists');

    function cerrarAcordeones() {
        acordeons.forEach(acordeon => {
            const acordeonItems = acordeon.querySelectorAll('.accordion-collapse');
            acordeonItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    const header = item.previousElementSibling;
                    const icon = header.querySelector('.fa-solid');
                    if (icon) {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                }
            });
        });
    }

    boxSelector.forEach(box => {
        box.addEventListener('click', function () {
            boxSelector.forEach(item => item.classList.remove('active'));
            box.classList.add('active');
            cerrarAcordeones();

            if (box.id === 'box-1') {
                document.querySelector('#acordeon-1').style.display = 'block';
                document.querySelector('#acordeon-2').style.display = 'none';
                document.querySelector('#acordeon-3').style.display = 'none';
            } else if (box.id === 'box-2') {
                document.querySelector('#acordeon-1').style.display = 'none';
                document.querySelector('#acordeon-2').style.display = 'block';
                document.querySelector('#acordeon-3').style.display = 'none';
            } else if (box.id === 'box-3') {
                document.querySelector('#acordeon-1').style.display = 'none';
                document.querySelector('#acordeon-2').style.display = 'none';
                document.querySelector('#acordeon-3').style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header .accordion-button');
        const collapse = item.querySelector('.accordion-collapse');
        const icon = header.querySelector('.fa-solid');

        header.addEventListener('click', function () {
            const allItems = item.closest('.accordion').querySelectorAll('.accordion-item');
            allItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherCollapse = otherItem.querySelector('.accordion-collapse');
                    const otherIcon = otherItem.querySelector('.accordion-header .fa-solid');
                    if (otherCollapse.classList.contains('show')) {
                        new bootstrap.Collapse(otherCollapse, {
                            toggle: true
                        });
                        if (otherIcon) {
                            otherIcon.classList.remove('fa-minus');
                            otherIcon.classList.add('fa-plus');
                        }
                    }
                }
            });

            if (collapse.classList.contains('show')) {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });

        collapse.addEventListener('hidden.bs.collapse', function () {
            if (icon) {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });

        collapse.addEventListener('shown.bs.collapse', function () {
            if (icon) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});
