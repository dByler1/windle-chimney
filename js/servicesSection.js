
//three main category buttons
$(".open-button").on("click", function (e) {
    //get the data target value of the button that was clicked which is the same as the accordian content IDs
    var x = this.getAttribute("data-target");

    //if the clicked button's associated card has the show class, set the data toggle to blank so it won't change
    if ($(x).hasClass("show")) {
        this.setAttribute("data-toggle", "")
    } else {
        //give the clicked button a data-toggle of collapse so it will open
        this.setAttribute("data-toggle", "collapse")
        changeAllAngleIcons($(this))
    }
})

//services sub categories
$(".servicesBTN").on("click", function (e) {
    //this loads
    //get the data target value of the button that was clicked which is the same as the accordian content IDs
    let dataTarget = this.getAttribute("data-target")
    let servicesDisplayValue = getComputedStyle(document.getElementById('servicesDescriptions')).display

    //all three console.logs fire and log expected results
    console.log('data target ' + dataTarget)
    console.log('services display value ' + servicesDisplayValue)
    console.log('test hasClass' + $(dataTarget).hasClass('show'))
    //if the clicked button's associated card does have the show class, set the data toggle to blank so it won't change
    //none of the logs in the if blocks fire
    if ($(dataTarget).hasClass("show") && servicesDisplayValue === 'block') {
        this.setAttribute("data-toggle", "")
        console.log('first block - already open - display block')
    } else if ($(dataTarget).hasClass("show") && servicesDisplayValue === 'none') {
        this.setAttribute("data-toggle", "")
        mobileShowServiceInfo($(this))
        console.log('second block - already open - display none - mobile assumption')
    }
    else {
        //give the clicked button a data-toggle of collapse so it will open
        this.setAttribute("data-toggle", "collapse")
        mobileShowServiceInfo($(this))
        changeAllAngleIcons($(this))
        console.log('third block - ')
    }
})

$('#backBTN').on('click', function (e) {
    //hide the back button
    $(this).toggleClass('d-md-none d-none')
    changeAllAngleIcons()
    
    //show ther services buttons
    let servicesBTNCol = document.getElementById('servicesBTN_Column');
    servicesBTNCol.classList.replace('d-md-flex', 'd-flex')
    servicesBTNCol.classList.remove('d-none')

    //hide the description column
    let descriptionCol = document.getElementById('servicesDescriptions')
    descriptionCol.classList.replace('d-block', 'd-none')
})


function changeAllAngleIcons(node) { 
    console.log('change all angle icons')
    if(node) {
        node.find('i').addClass('fa-angle-down').removeClass('fa-angle-right')
        node.siblings().find('i').removeClass('fa-angle-down').addClass('fa-angle-right')
    } else {
        $('.fas').not('.services i').addClass('fa-angle-down').removeClass('fa-angle-right')
    }
}

function mobileShowServiceInfo(node) {
    console.log('mobile show service info')
    //show the back button
    document.getElementById('backBTN').classList.replace('d-none', 'd-md-none')

    //hide the service buttons column on mobile but leave it visible on larger screens
    node.parent().toggleClass('d-flex d-md-flex')
    node.parent().addClass('d-none')

    //show the description column
    let descriptionCol = document.getElementById('servicesDescriptions')
    descriptionCol.classList.replace('d-none', 'd-block')
}



