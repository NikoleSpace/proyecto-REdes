import { Component } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    userId: String | null = null;

    constructor(private authService: AuthService){}

    ngAfterViewInit(): void {
      const sideBar: HTMLElement | null = document.querySelector('.sidebar');
      const searchBtn: HTMLButtonElement | null = document.querySelector('.content nav form .form-input button');
      const searchBtnIcon: HTMLElement | null = document.querySelector('.content nav form .form-input button .bx');
      const searchForm: HTMLElement | null = document.querySelector('.content nav form');
      const contentBody: HTMLElement | null = document.querySelector('.content');

      searchBtn?.addEventListener('click', function (e) {
          if (window.innerWidth < 576) {
              e.preventDefault();
              searchForm?.classList.toggle('show');
              if (searchForm?.classList.contains('show')) {
                  searchBtnIcon?.classList.replace('bx-search', 'bx-x');
              } else {
                  searchBtnIcon?.classList.replace('bx-x', 'bx-search');
              }
          }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 576) {
            searchBtnIcon?.classList.replace('bx-x', 'bx-search');
            searchForm?.classList.remove('show');
        }
      });

      const toggler: HTMLInputElement | null = document.getElementById('theme-toggle') as HTMLInputElement;

      toggler?.addEventListener('change', function () {
          if (this.checked) {
              document.body.classList.add('dark');
          } else {
              document.body.classList.remove('dark');
          }
      });
      
    }

    open(event : Event): void {
        event.preventDefault();
        this.userId = this.authService.getUserId(); 
        console.log('id:'+ this.userId);
        const modal: HTMLElement | null = document.querySelector('.modal');
        if (modal) {
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      }
}
