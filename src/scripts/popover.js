class Popover {
  constructor(buttonClass, popoverClass) {
    this.button = document.getElementsByClassName(buttonClass)[0];
    this.popover = document.getElementsByClassName(popoverClass)[0];
    this.init();
  }

  init() {
    this.button.addEventListener("click", () => this.togglePopover());
    document.addEventListener("click", (event) => this.closePopover(event));
  }

  togglePopover() {
    const rect = this.button.getBoundingClientRect();
    this.popover.style.left = `${rect.left}px`;
    this.popover.style.top = `${rect.top - this.popover.offsetHeight - 90}px`;
    this.popover.style.display =
      this.popover.style.display === "block" ? "none" : "block";
  }

  closePopover(event) {
    if (
      !this.button.contains(event.target) &&
      !this.popover.contains(event.target)
    ) {
      this.popover.style.display = "none";
    }
  }
}

const popover = new Popover("popoverToggle", "popover");
