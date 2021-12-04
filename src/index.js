const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

const Module = class {
  constructor(oppoStatus) {
    this.oppoStatus = oppoStatus;
  }
  start() {
    const select = document.getElementById("status");
    const input = document.getElementById("success");
    const output = document.getElementById("output");

    oppoStatus.forEach((item) => {
      let selectedItem = document.createElement("option");
      // option.classList.add("cons");
      selectedItem.value = item.K_OPPO_STATUS;
      selectedItem.value = item.SUCCESS;
      selectedItem.innerHTML = item.STATUS;
      select.appendChild(selectedItem);
    });
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const val = Object.fromEntries(data.entries());
      const selectedOption = oppoStatus.find(
        (item) => item.SUCCESS == val.success
      );
      console.log(selectedOption);
      const status = selectedOption.K_OPPO_STATUS;
      const success = parseInt(val.success);
      output.innerHTML = JSON.stringify({ status, success });
    });

    select.addEventListener("change", (e) => {
      input.value = e.target.value;
    });

    // Start modifying the form elements here!
    // You are allowed to add extra methods and properties to this class
  }
};

const main = new Module();
main.start();
