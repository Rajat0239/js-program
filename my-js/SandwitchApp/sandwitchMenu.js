$('body').on('click', '#addSandwitch', function(){
    var count = parseInt($(this).next().val()) + 1
    $(this).next().val(`${count}`)
    var price = $(this).parent().prev().text()
    updateTotalRs(price, 'add')
})

$('body').on('click', '#removeSandwitch', function(){
    var count = $(this).prev().val() - 1
    if(count >= 0)
    {
        $(this).prev().val(`${count}`)
        var price = $(this).parent().prev().text()
        updateTotalRs(price, 'subtract')
    }
    else{
        $(this).prev().val(`${0}`)
    }
})

$('body').on('click', '#showMenu', function(){
    if ($('#forMenu').css('display') == 'none') {
        $(this).text('Hide Menu')
        $('#forMenu').css('display','contents')
    }
    else {
        $(this).text('Show Menu')
        $('#forMenu').css('display','none')
    }
})



$('body').on('click', '#placeOrder', function(){
    if($('#totalrs').val() > 0){
        alert("Confirm Order")
        $('#showMenu').text('Show Menu')
        $('#forMenu').css('display','none')
    }
})



$('body').on('click', '#showOrder', function(){
    if ($('#forMenu').css('display') == 'none'){
        $('#showOrder').text('Hide Orders')
        $('#OrederedMenu').css('display','contents')
    }
    else
    {
        $('#OrederedMenu').css('display','none')
    }
})




function updateTotalRs(rupees, operation){
    var prevPrice = parseInt($('#totalrs').val())
    rupees = parseInt(rupees)
    if (operation == 'add'){
        $('#totalrs').val(`${prevPrice + rupees}`)
    }
    else {
        $('#totalrs').val(`${prevPrice - rupees}`)
    }
}

