

$(".open-button").on("click", function (e) {
    //get the data target value of the button that was clicked which is the same as the accordian content IDs
    var x = this.getAttribute("data-target");

    //if the clicked button's associated card has the show class, set the data toggle to blank so it won't change
    if ($(x).hasClass("show")) {
        this.setAttribute("data-toggle", "")
    } else {
        //give the clicked button a data-toggle of collapse so it will open
        this.setAttribute("data-toggle", "collapse")
        switchAngleIcon($(this))
    }
})

$(".servicesBTN").on("click", function (e) {
    //get the data target value of the button that was clicked which is the same as the accordian content IDs
    var x = this.getAttribute("data-target");
    let y = $('#servicesDescriptions').css('display')


    //if the clicked button's associated card does have the show class, set the data toggle to blank so it won't change
    if ($(x).hasClass("show") && y === 'block') {
        this.setAttribute("data-toggle", "")
    } else if ($(x).hasClass("show") && y === 'none') {
        this.setAttribute("data-toggle", "")
        mobileShowServiceInfo($(this))
    }
    else {
        //give the clicked button a data-toggle of collapse so it will open
        this.setAttribute("data-toggle", "collapse")
        mobileShowServiceInfo($(this))
        switchAngleIcon($(this))
    }
})

$('#backBTN').on('click', function (e) {
    //hide the back button
    $(this).toggleClass('d-md-none d-none')
    changeAllAngleIconsDown()
    //show ther services buttons
    let servicesBTNCol = document.getElementById('servicesBTN_Column');
    servicesBTNCol.classList.replace('d-md-flex', 'd-flex')
    servicesBTNCol.classList.remove('d-none')

    //hide the description column
    let descriptionCol = document.getElementById('servicesDescriptions')
    descriptionCol.classList.replace('d-block', 'd-none')
})


function switchAngleIcon(node) {
    changeAllAngleIconsDown()
    node.find('i').toggleClass('fa-angle-down fa-angle-right')
}



function changeAllAngleIconsDown() {
    let angleElements = document.getElementsByClassName('fas')

    for (let i = 0; i < angleElements.length; i++) {
        angleElements[i].classList.replace('fa-angle-right', 'fa-angle-down')
    }
}



function mobileShowServiceInfo(node) {

    //show the back button
    document.getElementById('backBTN').classList.replace('d-none', 'd-md-none')

    //hide the service buttons column on mobile but leave it visible on larger screens
    node.parent().toggleClass('d-flex d-md-flex')
    node.parent().addClass('d-none')

    //show the description column
    let descriptionCol = document.getElementById('servicesDescriptions')
    descriptionCol.classList.replace('d-none', 'd-block')
}



