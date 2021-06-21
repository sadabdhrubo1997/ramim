const selectSubject = document.querySelector("#selectSubject")
const subjectDropdown = document.querySelector("#subjectDropdown")
const subjectDropdownItem = document.querySelectorAll("#subjectDropdown li label")
const selectClass = document.querySelector("#selectClass")
const classDropdown = document.querySelector("#classDropdown")
const classDropdownItem = document.querySelectorAll("#classDropdown li label")




// subject selection

selectSubject.addEventListener("click", (e) => {
    subjectDropdown.classList.toggle("show")
})

selectSubject.addEventListener("blur", (e) => {
    subjectDropdown.classList.remove("show")
})


subjectDropdownItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        document.querySelector("#selectedSubject").innerHTML = e.target.parentNode.childNodes[0].value
        subjectDropdown.classList.remove("show")
    })
})

// subject selection end



// class selection 



selectClass.addEventListener("click", (e) => {
    classDropdown.classList.toggle("show")
})

selectClass.addEventListener("blur", (e) => {
    classDropdown.classList.remove("show")
})


classDropdownItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        document.querySelector("#selectedClass").innerHTML = e.target.parentNode.childNodes[0].value
        classDropdown.classList.remove("show")
    })
})


// class selection end






//image slider 

$("#slider").slick({
    slidesToShow:3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed:5000,
    dots:true,
    draggable:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})







//image slider end 
