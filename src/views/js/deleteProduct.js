function deleteProduct(id) {
    $.ajax({
        url: `/deleteProduct?id=${id}`,
        type: "DELETE",
        success: () => {
            location.reload()
        },
        error: (error) => {
            window.alert(error.responseText)
        }
    })
}