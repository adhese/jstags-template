let banner = undefined;

// this overlay should be able to work on any banner. All we know is that we are served in an iframe, so we want to find the iframe document and append the overlay to that document.
if (window.self !== window.top) {
  console.log("window.self !== window.top");
  // we are in an iframe
  banner = document.body;
} else if (document.currentScript.parentNode) {
  console.log("document.currentScript.parentNode found");
  console.log(document.currentScript.parentNode);
  // no iframe is found, we are not in an iframe. append to parent node of this script instead
  banner = document.currentScript.parentNode;
} else {
  console.log("finding parent div");
  banner = document.getElementsByTagName("div")[0];
}

// Add styles to banner
const styles = document.createElement("style");
styles.innerHTML = `
        .closeButton {
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          width: 15px;
          height: 15px;
          z-index: 9999999;
          color: darkgreen;
          background-color: #fff;
          border-bottom-left-radius: 5px;
        }

        .container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px 20px;
          box-sizing: border-box;
          background-color: #f0f0f0;
          z-index: 9999998;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .container > * {
          font-size: 14px !important;
          color: #333 !important;
          font-weight: 400 !important;
          font-family: Arial, sans-serif !important;
          font-style: normal !important;
        }

        .text {
          margin: 10px 0;
        }

        .buttonContainer {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
        }

        .returnButton,
        .confirmButton {
          cursor: pointer;
          padding: 5px 10px;
          border: none;
          z-index: 99;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 25px;
        }

        .returnButton {
          background-color: #333;
          color: #fff;
        }

        .confirmButton {
          background-color: transparent;
          border: 1px solid red;
          color: red;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 9999997;
          display: none;
        }

        @media (max-width: 500px) {
          .buttonContainer {
            flex-direction: column;
          }
        }
        `;
banner.appendChild(styles);

let popUpOpen = false;

// Add close button
const closeButton = document.createElement("div");
closeButton.classList.add("closeButton");
closeButton.innerHTML =
  '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  d="M8.92773 9.95361C10.5065 9.79085 11.8818 9.45719 13.0537 8.95264C13.2572 9.03402 13.3996 9.13981 13.481 9.27002C13.481 13.4937 13.5135 16.5129 13.5786 18.3276C13.5868 18.5392 13.6478 18.7223 13.7617 18.877C13.8838 19.0234 14.0547 19.1374 14.2744 19.2188C14.4941 19.3001 14.6772 19.3612 14.8237 19.4019C14.9702 19.4344 15.1615 19.467 15.3975 19.4995C15.4463 19.5972 15.4707 19.6989 15.4707 19.8047C15.4707 19.9105 15.4463 20 15.3975 20.0732C14.3232 20.0244 13.2816 20 12.2725 20C11.2796 20 10.2461 20.0244 9.17188 20.0732C9.13932 19.943 9.12305 19.8535 9.12305 19.8047C9.12305 19.764 9.13932 19.6623 9.17188 19.4995C9.44043 19.467 9.66016 19.4344 9.83105 19.4019C10.002 19.3612 10.2135 19.3001 10.4658 19.2188C10.7181 19.1374 10.9093 19.0234 11.0396 18.877C11.1698 18.7223 11.2389 18.5392 11.2471 18.3276C11.2796 17.522 11.2959 16.5454 11.2959 15.3979C11.2959 15.0155 11.2918 14.3644 11.2837 13.4448C11.2756 12.5252 11.2715 11.7196 11.2715 11.0278C10.8076 10.743 10.0264 10.5762 8.92773 10.5273C8.89518 10.3971 8.87891 10.2954 8.87891 10.2222C8.87891 10.1733 8.89518 10.0838 8.92773 9.95361ZM10.8442 4.85107C10.8442 4.43604 10.9907 4.08203 11.2837 3.78906C11.5848 3.49609 11.9388 3.34961 12.3457 3.34961C12.7607 3.34961 13.1147 3.49609 13.4077 3.78906C13.7007 4.08203 13.8472 4.43604 13.8472 4.85107C13.8472 5.25798 13.7007 5.61198 13.4077 5.91309C13.1147 6.20605 12.7607 6.35254 12.3457 6.35254C11.9388 6.35254 11.5848 6.20605 11.2837 5.91309C10.9907 5.61198 10.8442 5.25798 10.8442 4.85107Z" /></svg>';
banner.appendChild(closeButton);

// Add container for text and buttons
const container = document.createElement("div");
container.classList.add("container");

// Add text above buttons
const text = document.createElement("p");
text.classList.add("text");
text.innerHTML =
  "Liever geen kansspel gerelateerde advertenties zoals deze te zien krijgen? We kunnen u hiervan uitsluiten.";
container.appendChild(text);

// Add button container
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
container.appendChild(buttonContainer);

// Add return button
const returnButton = document.createElement("div");
returnButton.classList.add("returnButton");
returnButton.innerHTML =
  "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' style='width: 100%; height: 100%;'><path stroke-linecap='round' stroke-linejoin='round' d='M10 19l-7-7m0 0l7-7m-7 7h18' /></svg>";
buttonContainer.appendChild(returnButton);

// Add confirm button
const confirmButton = document.createElement("div");
confirmButton.classList.add("confirmButton");
confirmButton.innerHTML = "ik wil dit niet meer zien";
buttonContainer.appendChild(confirmButton);

// Add container to banner
banner.appendChild(container);

// Add overlay to banner
const overlay = document.createElement("div");
overlay.classList.add("overlay");
banner.appendChild(overlay);

// Function to toggle popup
function togglePopUp() {
  popUpOpen = !popUpOpen;

  if (popUpOpen) {
    overlay.style.display = "block";
    container.style.display = "flex";
  } else {
    overlay.style.display = "none";
    container.style.display = "none";
  }
}

// Listen for click on close button
closeButton.addEventListener("click", function () {
  // Toggle popup
  togglePopUp();
});

// Listen for click on close button
returnButton.addEventListener("click", function () {
  // Toggle popup
  togglePopUp();
});

// Listen for click on confirm button
confirmButton.addEventListener("click", function () {
  // Remove banner
  // Save preferences...
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src =
    "https://pool-adswag.adhese.com/tag/setcookie.html?eventName=adswag_opt=out";
  document.body.appendChild(iframe);
  confirmButton.innerHTML = "Bedankt voor uw feedback";
  confirmButton.style.backgroundColor = "green";
  confirmButton.style.color = "white";
  confirmButton.style.border = "none";
  confirmButton.style.cursor = "default";

  setTimeout(function () {
    banner.remove();
  }, 5000);
});
