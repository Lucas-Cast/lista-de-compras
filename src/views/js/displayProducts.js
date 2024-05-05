
$.when(
    $.get('/findProducts'),
    $.ready()
).done( data => {
    const table = document.getElementById('productsTable')
    Object.values(data)[0].forEach(element => {
            const tr = document.createElement('tr')
            tr.className = 'product'
            
            const productId = element._id
            const productName = document.createTextNode(element.name)
            const productDescription = document.createTextNode(element.description)
            const productQuantity = document.createTextNode(element.quantity)
        
            const nameTd = document.createElement('td')
            nameTd.appendChild(productName)

            const descriptionTd = document.createElement('td')
            descriptionTd.appendChild(productDescription)

            const quantityTd = document.createElement('td')
            quantityTd.appendChild(productQuantity)

            const deleteBtn = document.createElement('button')
            deleteBtn.innerHTML = '🗑️'
            deleteBtn.value = productId
            deleteBtn.className = 'deleteProductBtn'
            deleteBtn.setAttribute('onclick', 'deleteProduct(this.value)')

            tr.appendChild(nameTd)
            tr.appendChild(descriptionTd)
            tr.appendChild(quantityTd)
            tr.appendChild(deleteBtn)

            table.appendChild(tr);
        })   
    }).fail( err => console.log('Error: ',err))
