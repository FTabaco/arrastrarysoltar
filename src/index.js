import interact from 'interactjs';

document.addEventListener('DOMContentLoaded', function () {
    interact('.modulo').draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        listeners: {
            start (event) {
                console.log('Arrastrando módulo:', event.target.id);
            },
            move (event) {
                const target = event.target;
                const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                target.style.transform = `translate(${x}px, ${y}px)`;

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            },
            end (event) {
                console.log('Módulo soltado:', event.target.id);
            }
        }
    });

    interact('.dropzone').dropzone({
        accept: '.modulo',
        overlap: 0.75,
        ondropactivate: function (event) {
            event.target.classList.add('drop-active');
        },
        ondropdeactivate: function (event) {
            event.target.classList.remove('drop-active');
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget;
            var dropzoneElement = event.target;

            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
        },
        ondragleave: function (event) {
            event.target.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
        },
        ondrop: function (event) {
            var draggableElement = event.relatedTarget;
            var dropzoneElement = event.target;
            var profesorId = dropzoneElement.getAttribute('data-profesor');
            var moduloId = draggableElement.getAttribute('data-modulo');
            var horas = parseInt(draggableElement.getAttribute('data-horas'));

            console.log("Asignar Módulo " + moduloId + " al Profesor " + profesorId + " con " + horas + " horas");

            draggableElement.classList.add('dropped');
        }
    });

    interact('.profesor').dropzone({
        accept: '.modulo',
        overlap: 0.75,
        ondropactivate: function (event) {
            event.target.classList.add('drop-active');
        },
        ondropdeactivate: function (event) {
            event.target.classList.remove('drop-active');
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget;
            var dropzoneElement = event.target.querySelector('.dropzone');

            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
        },
        ondragleave: function (event) {
            var dropzoneElement = event.target.querySelector('.dropzone');
            dropzoneElement.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
        },
        ondrop: function (event) {
            var draggableElement = event.relatedTarget;
            var dropzoneElement = event.target.querySelector('.dropzone');
            var profesorId = dropzoneElement.getAttribute('data-profesor');
            var moduloId = draggableElement.getAttribute('data-modulo');
            var horas = parseInt(draggableElement.getAttribute('data-horas'));

            console.log("Asignar Módulo " + moduloId + " al Profesor " + profesorId + " con " + horas + " horas");

            draggableElement.classList.add('dropped');
        }
    });
});
