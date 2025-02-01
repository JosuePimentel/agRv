import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContainerRefModules } from "../../module/modules/container-ref-search.modules";
import { PublicationDtoInterface } from "../../module/interfaces/DTO's/PublicationAggregate/publication.dto.interface";
import { PublicationService } from "../../Services/PublicationAggregate/publication.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: 'search.component.html',
  host: {
    class: 'absolute left-0 top-0 w-screen h-screen bg-PRIMARY-default z-[99999999999] block cursor-default px-96 py-10'
  }
})
export class SearchComponent implements OnInit{
  dataOriginal: PublicationDtoInterface[] = [];
  data: PublicationDtoInterface[] = [];
  input = '';

  constructor(private readonly containerRefModules: ContainerRefModules, private readonly service: PublicationService) {
  }
  async ngOnInit(): Promise<void> {
    this.dataOriginal = await this.service.getAll();
    console.log(this.dataOriginal)
  }

  close() {
    this.containerRefModules.remove()
  }

  search() {
    if(this.input) {
      this.data = this.dataOriginal.filter(pub => pub.title.toLowerCase().includes(this.input.toLowerCase()));
    } else {
      this.data = [];
    }
  }
}
