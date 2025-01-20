import { Component, Input, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PublicationDtoInterface } from "../../module/interfaces/DTO's/PublicationAggregate/publication.dto.interface";
import { CommonModule } from '@angular/common';
import { SectionService } from '../../Services/PublicationAggregate/section.service';

@Component({
  selector: 'app-publication-card',
  standalone: true,
  imports: [MatTooltipModule, CommonModule],
  templateUrl: './publication-card.component.html',
  host: {
    class:
      'w-full h-full flex flex-col cursor-pointer transition-colors rounded-md overflow-hidden hover:scale-[.98] transition-all',
  },
})
export class PublicationCardComponent implements OnInit {
  @Input({ required: true }) data!: PublicationDtoInterface;
  dateToday = new Date();
  eventDate: number | undefined;
  filmDate: number | undefined;

  constructor(private readonly service: SectionService) {}

  async ngOnInit(): Promise<void> {
    if (this.data.showId) {
      const dateEvent: Date = new Date(this.data.showId.date);

      this.dateToday.setHours(0, 0, 0, 0);
      dateEvent!.setHours(0, 0, 0, 0);

      if (this.dateToday.getTime() == dateEvent.getTime()) {
        this.eventDate = 0;
      } else if (this.isNextWeekend(dateEvent, this.dateToday)) {
        this.eventDate = 1;
      } else if (this.isSameWeek(this.dateToday, dateEvent)) {
        this.eventDate = 2;
      } else if(this.isSameMonth(this.dateToday, dateEvent)) {
        this.eventDate = 3;
      }
    } else if(this.data.filmId) {
      const sections = await this.service.getByFilmId(this.data.id);

      for (const sec of sections) {
        console.log(sec);
        const begin = new Date(sec.beginDate);
        const end = new Date(sec.endDate);
        begin.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        if(this.dateToday.getTime() >= begin.getTime() && this.dateToday.getTime() < end.getTime()) {
          this.filmDate = 1;
          break;
        }
      }
    } else if(this.data.cinemaId) {
      console.log(this.data);
    }
  }

  isSameMonth(date1: Date, date2: Date) {
    return (
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  isNextWeekend(dateToCheck: Date, today: Date) {
    // Calcula o próximo sábado
    const nextSaturday = new Date(today);
    const daysUntilSaturday = (6 - today.getDay() + 7) % 7; // Quantos dias até o próximo sábado
    nextSaturday.setDate(today.getDate() + daysUntilSaturday);

    // Calcula o próximo domingo
    const nextSunday = new Date(nextSaturday);
    nextSunday.setDate(nextSaturday.getDate() + 1);

    // Zera as horas para as datas do fim de semana
    nextSaturday.setHours(0, 0, 0, 0);
    nextSunday.setHours(0, 0, 0, 0);

    // Zera as horas da data a ser verificada
    const checkDate = new Date(dateToCheck);
    checkDate.setHours(0, 0, 0, 0);

    // Verifica se a data está entre o próximo sábado e domingo
    return (
      checkDate.getTime() === nextSaturday.getTime() ||
      checkDate.getTime() === nextSunday.getTime()
    );
  }

  isSameWeek(date1: Date, date2: Date) {
    const startOfWeek = (date: Date) => {
      const newDate = new Date(date);
      const day = newDate.getDay(); // 0 (domingo) a 6 (sábado)
      const diff = newDate.getDate() - day; // Ajusta para segunda-feira
      newDate.setDate(diff);
      newDate.setHours(0, 0, 0, 0); // Zera horas
      return newDate;
    };

    // Calcula o início da semana para ambas as datas
    const start1 = startOfWeek(date1);
    const start2 = startOfWeek(date2);

    // Compara se estão na mesma semana
    return start1.getTime() === start2.getTime();
  }
}
