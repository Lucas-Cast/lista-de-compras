document.getElementById('downloadBtn').onclick = function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();


    doc.text('Lista de Compras', 10, 10);
    
    const table = document.getElementById('productsTable');
    let y = 20;

    for (let i = 1; i < table.rows.length; i++) { 
        const row = table.rows[i];
        const product = row.cells[0].innerText;
        const quantity = row.cells[2].innerText;

        doc.text(`${quantity} ${product}`, 10, y);
        y += 10;
    }
    doc.save('lista_de_compras.pdf');
};