const modal = document.querySelector(".top-modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
    console.log("modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

const closemodal = () =>{
    console.log("modal is closing");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};