import { ComponentRef, inject, Injectable, Type, ViewContainerRef } from "@angular/core";
import { SearchComponent } from "../../components/search/search.component";

@Injectable({
  providedIn: 'root'
})
export class ContainerRefModules {
  private vcr!: ViewContainerRef;

  set setViewContainerRef(v: ViewContainerRef) {
    this.vcr = v;
  }

  createComponent<T>(component: Type<T>): ComponentRef<T> {
    if (!this.vcr) {
      throw new Error('vcr não foi configurado!');
    }
    document.body.classList.add('overflow-hidden');
    return this.vcr.createComponent(component);
  }

  remove() {
    this.vcr.clear();
    this.vcr.remove();
    document.body.classList.remove('overflow-hidden');
  }
}
