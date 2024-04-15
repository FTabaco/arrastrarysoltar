import interact from "interactjs";

// Propiedad de transformación para gestionar la posición de los elementos arrastrables
let transformProp;

// Posiciones iniciales de los elementos arrastrables
const dragPositions = [1, 2, 3, 4].reduce((acc, n) => {
  acc[`drag${n}`] = { x: 0, y: 0 };
  return acc;
}, {});

//Configuración de interacciones máximas
interact.maxInteractions(Infinity);

//*Configuración de los elementos arrastrables
interact(".js-drag").draggable({
  listeners: {
    start(event) {
      // Al inicio del arrastre, guarda la posición inicial del elemento
      const position = dragPositions[event.target.id];
      position.x = parseInt(event.target.getAttribute("data-x"), 10) || 0;
      position.y = parseInt(event.target.getAttribute("data-y"), 10) || 0;
    },
    move(event) {
      // Durante el arrastre, actualiza la posición del elemento
      const position = dragPositions[event.target.id];
      position.x += event.dx;
      position.y += event.dy;

      // Aplica la transformación de acuerdo a la propiedad compatible
      if (transformProp) {
        event.target.style[transformProp] =
          "translate(" + position.x+ "px, " + position.y + "px)";
      } else {
        event.target.style.left = position.x + "px";
        event.target.style.top = position.y + "px";
      }
    },
    end(event) {
      //* Al finalizar el arrastre, guarda la posición final del elemento
      const position = dragPositions[event.target.id];
      event.target.setAttribute("data-x", position.x);
      event.target.setAttribute("data-y", position.y);
    },
  },
});

//* Configuración de las áreas de destino
setupDropzone("#drop1", "#drag1"); // dropzone #1 acepta el draggable #1
setupDropzone("#drop2", "#drag1, #drag2"); // dropzone #2 acepta el draggable #1 y #2
setupDropzone(".js-drop", "#drag3"); // cada dropzone acepta el draggable #3

/**
 * Configura un elemento dado como una zona de destino.
 *
 * @param {HTMLElement|String} target
 * @param {String} accept
 */
function setupDropzone(target, accept) {
  interact(target)
    .dropzone({
      accept,
      ondropactivate: function (event) {
        // Agrega una clase al activar la zona de destino
        addClass(event.relatedTarget, "-drop-possible");
      },
      ondropdeactivate: function (event) {
        // Elimina la clase al desactivar la zona de destino
        removeClass(event.relatedTarget, "-drop-possible");
      },
    })
    .on("dropactivate", (event) => {
      // Incrementa el contador de activación y actualiza el estilo si es necesario
      const active = event.target.getAttribute("active") | 0;
      if (active === 0) {
        addClass(event.target, "-drop-possible");
        event.target.textContent = "¡Soltar aquí!";
      }
      event.target.setAttribute("active", active + 1);
    })
    .on("dropdeactivate", (event) => {
      // Decrementa el contador de activación y actualiza el estilo si es necesario
      const active = event.target.getAttribute("active") | 0;
      if (active === 1) {
        removeClass(event.target, "-drop-possible");
        event.target.textContent = "Zona de soltado";
      }
      event.target.setAttribute("active", active - 1);
    })
    .on("dragenter", (event) => {
      // Agrega una clase al entrar en la zona de destino
      addClass(event.target, "-drop-over");
      event.relatedTarget.textContent = "Estoy dentro";
    })
    .on("dragleave", (event) => {
      // Elimina la clase al salir de la zona de destino
      removeClass(event.target, "-drop-over");
      event.relatedTarget.textContent = "Suéltame";
    })
    .on("drop", (event) => {
      // Realiza acciones al soltar el elemento sobre la zona de destino
      removeClass(event.target, "-drop-over");
      event.relatedTarget.textContent = "Ya me has soltado";
    });
}

// Función utilitaria para agregar una clase a un elemento
function addClass(element, className) {
  if (element.classList) {
    return element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}

// Función utilitaria para eliminar una clase de un elemento
function removeClass(element, className) {
  if (element.classList) {
    return element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp(className + " *", "g"),
      "",
    );
  }
}

// Verifica la propiedad de transformación compatible en el navegador
interact(document).on("ready", () => {
  transformProp =
    "transform" in document.body.style
      ? "transform"
      : "webkitTransform" in document.body.style
        ? "webkitTransform"
        : "mozTransform" in document.body.style
          ? "mozTransform"
          : "oTransform" in document.body.style
            ? "oTransform"
            : "msTransform" in document.body.style
              ? "msTransform"
              : null;
});
//esto es solo un ejemplo tengo que añadir muchas mas cosas aun e implementar esto dentro de lo que queremos preparar realmente pero no sin antes hacer las comprobaciones necesarias asi como preparar toda la documentación que el profesor me mande durante estos dia