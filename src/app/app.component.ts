import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  clickMessage = "";
  values = "";
  value = "";

  onClickMe() {
    this.clickMessage = "keekee!";
  }

  onKey(event: any | KeyboardEvent) {
    // without type info

    console.log(event);

    this.values += event.target.value + " | ";
    this.values += (event.target as HTMLInputElement).value + " | ";
  }
  onEnter(value: string) {
    this.value = value;
  }
}
