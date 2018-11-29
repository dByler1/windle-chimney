
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
        changePlusandMinusSigns($(this))
    }
})

//services sub categories
$(".servicesBTN").on("click", function (e) {
    //get the data target value of the button that was clicked which is the same as the accordian content IDs
    let dataTarget = this.getAttribute("data-target")
    let servicesDisplayValue = getComputedStyle(document.getElementById('servicesDescriptions')).display

    //if the clicked button's associated card does have the show class, set the data toggle to blank so it won't change
    //none of the logs in the if blocks fire
    if ($(dataTarget).hasClass("show") && servicesDisplayValue === 'block') {
        this.setAttribute("data-toggle", "")
    } else if ($(dataTarget).hasClass("show") && servicesDisplayValue === 'none') {
        this.setAttribute("data-toggle", "")
        mobileShowServiceInfo($(this))  
    }
    else {
        //give the clicked button a data-toggle of collapse so it will open
        this.setAttribute("data-toggle", "collapse")
        mobileShowServiceInfo($(this))
        changeAllAngleIcons($(this))
    }
})

$('#backBTN').on('click', function (e) {
    //hide the back button
    $(this).removeClass('d-md-none d-block').addClass('d-none')
    changeAllAngleIcons()
    
    //show ther services buttons
    $('#servicesBTN_Column').removeClass('d-md-flex d-none').addClass('d-flex')

    //hide the description column
    $('#servicesDescriptions').removeClass('d-block').addClass('d-none')
})


function changeAllAngleIcons(node) { 
    if(node) {
        node.find('i').addClass('fa-angle-down').removeClass('fa-angle-right')
        node.siblings().find('i').removeClass('fa-angle-down').addClass('fa-angle-right')
    } else {
        $('.fas').not('.services i').addClass('fa-angle-down').removeClass('fa-angle-right')
    }
}

function mobileShowServiceInfo(node) {
    //show the back button
    $('#backBTN').removeClass('d-none').addClass('d-md-none d-block')
    //hide the service buttons column on mobile but leave it visible on larger screens
    node.parent().removeClass('d-flex')
    node.parent().addClass('d-none d-md-flex')
    //show the description column
    $('#servicesDescriptions').removeClass('d-none').addClass('d-block');
}

function changePlusandMinusSigns(node) {
    let icon = node.find('i')
    if(!icon.hasClass('fa-minus')) {
        icon.removeClass('fa-plus').addClass('fa-minus')
        node.siblings().find('i').removeClass('fa-minus fa-plus').addClass('fa-plus')
    }
}



