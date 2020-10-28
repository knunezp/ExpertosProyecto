import { Component, OnInit } from '@angular/core';

interface ComponentEvent {
  name: string;
  timestamp: string;
}

@Component({
  selector: 'app-editor-contenido',
  templateUrl: './editor-contenido.component.html',
  styleUrls: ['./editor-contenido.component.css'],
})
export class EditorContenidoComponent implements OnInit {

  constructor() {}
  ckeditorContent = "<b>Escribe todo el contenido que quieras</b>";

  public events: ComponentEvent[] = [];
  public editorConfig = {
    /*toolbar: [
			[ 'Source' ],
			[ 'Styles', 'Format', 'Font', 'FontSize' ],
			[ 'Bold', 'Italic' ],
			[ 'Undo', 'Redo' ],
			[ 'About' ]
    ]*/
    toolbarGroups: [
      { name: "document", groups: ["mode", "document", "doctools"] },
      { name: "clipboard", groups: ["clipboard", "undo"] },
      //{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
      //{ name: 'forms', groups: [ 'forms' ] },
      "/",
      { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
      },
      //{ name: 'links', groups: [ 'links' ] },
      //{ name: 'insert', groups: [ 'insert' ] },
      "/",
      { name: "styles", groups: ["styles"] },
      { name: "colors", groups: ["colors"] },
      { name: "tools", groups: ["tools"] },
      { name: "others", groups: ["others"] },
      //{ name: 'about', groups: [ 'about' ] }
    ],
  };

  ngOnInit(): void {}

  clearEventsLog(): void {
    this.events.length = 0;
  }

  onReady(): void {
    this.logEvent("ready");
  }

  onChange(): void {
    this.logEvent("change");
  }

  onFocus(): void {
    this.logEvent("focus");
  }

  onBlur(): void {
    this.logEvent("blur");
  }

  private logEvent(eventName: string): void {
    if (this.events.length > 19) {
      this.events.pop();
    }

    const eventData = {
      name: eventName,
      timestamp: this.getCurrentTimestamp(),
    };

    this.events.unshift(eventData);

    console.log(eventData.timestamp, eventData.name, event);
  }

  private getCurrentTimestamp() {
    return new Intl.DateTimeFormat("en", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  }
}
