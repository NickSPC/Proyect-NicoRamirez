// Alternar fila de detalles
function toggleDetails(button) {
    const row = button.parentNode.parentNode.nextElementSibling;
    row.style.display = row.style.display === "table-row" ? "none" : "table-row";
}

// Función de filtro de búsqueda
function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.querySelector('table tbody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowContainsFilter = false;
        
        for (let j = 1; j < cells.length; j++) { // Skip the first column
            if (cells[j].textContent.toLowerCase().indexOf(filter) > -1) {
                rowContainsFilter = true;
                break;
            }
        }

        rows[i].style.display = rowContainsFilter ? "" : "none"; // Show or hide
    }
}

// script para manejar la modal
document.addEventListener('DOMContentLoaded', function () {
    // Obtener modal
    var modal = document.getElementById("modal");
    var closeModal = document.getElementById("closeModal");

    // Agregar eventos a los botones "Detalles"
    var buttons = document.querySelectorAll(".button.small-button");
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            showModal(index);
        });
    });

    // Función para mostrar la modal
    function showModal(index) {
        var accounts = [
            { nombre: "Luis", apellido: "García", dni: "38883751", fechaNacimiento: "18 Nov 1992", saldo: "$950,000" },
            { nombre: "Maria", apellido: "Rodríguez", dni: "30844639", fechaNacimiento: "18 Dec 1982", saldo: "$890,900" },
            { nombre: "Carlos", apellido: "Pérez", dni: "27346353", fechaNacimiento: "18 Nov 1972", saldo: "$1,420,000" },
            { nombre: "Ana", apellido: "Sánchez", dni: "30309592", fechaNacimiento: "18 Mar 1982", saldo: "$660,800" },
            { nombre: "Fernando", apellido: "Martínez", dni: "37187733", fechaNacimiento: "25 Mar 1993", saldo: "$750,000" },
            { nombre: "Sofía", apellido: "Gómez", dni: "42697868", fechaNacimiento: "23 Oct 2000", saldo: "$890,300" },
            { nombre: "Alan", apellido: "Sanchez", dni: "31996932", fechaNacimiento: "10 Mar 1986", saldo: "$2,690,000" },
            { nombre: "Lionel", apellido: "Sanchez", dni: "40520306", fechaNacimiento: "29 Ago 1999", saldo: "$630,000" }
        ];

        var account = accounts[index];
        var modalBody = document.getElementById("modalBody");
        modalBody.innerHTML = `
            <p><strong>Nombre:</strong> ${account.nombre}</p>
            <p><strong>Apellido:</strong> ${account.apellido}</p>
            <p><strong>DNI:</strong> ${account.dni}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${account.fechaNacimiento}</p>
            <p><strong>Saldo:</strong> ${account.saldo}</p>
        `;
        modal.style.display = "block"; // Muestra la modal
    }

    // Cerrar la modal cuando se hace clic en el botón de cerrar
    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    // Cerrar la modal cuando se hace clic fuera de la modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
