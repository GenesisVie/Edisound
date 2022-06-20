import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faPlus, faCheck} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.scss']
})
export class PlaylistCreateComponent implements OnInit {
  @Input() state: boolean = true;
  faPlus = faPlus;
  faCheck = faCheck;
  playlistForm!: FormGroup;
  namePlaylist!: string;

  @Output() callback = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.playlistForm = this.formBuilder.group({
      namePlaylist: new FormControl()
    })
  }

  onClick() {
    this.state = !this.state;
    if(!this.state){
      setTimeout(()=>{ // this will make the execution after the above boolean has changed
        // @ts-ignore
        document.getElementById("input").focus();
      },0);
    }
  }

  onFocusOut() {
    console.log(this.playlistForm.get('namePlaylist')!.value);
    if (this.playlistForm.get('namePlaylist')!.value == null)
      this.state = !this.state
  }

  onSubmit(): void {
    this.namePlaylist = this.playlistForm.get('namePlaylist')!.value;
    if (this.namePlaylist == null) {
      alert("Le formulaire est vide, veuillez rentrer une valeur");
      return;
    }

    this.httpService.postPlaylist(this.namePlaylist).subscribe({
      next: (response) => {
        this.callback.emit();
      },
      error: (error) => console.log(error),
    });

    this.playlistForm.reset();
  }
}
