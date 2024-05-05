function sendProduct() {
    const name = $('#sendProductNameTextBox').val()
    const description = $('#sendProductDescriptionTextBox').val()
    const quantity = Number($('#sendProductQuantityTextBox').val())
    const reqBody = {name, description, quantity}

    $.ajax({
        url: "/saveProduct",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(reqBody),
        success: () => {
            location.reload()
        },
        error: (error) => {
            window.alert(error.responseText)
        }
    })
}