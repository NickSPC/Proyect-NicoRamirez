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