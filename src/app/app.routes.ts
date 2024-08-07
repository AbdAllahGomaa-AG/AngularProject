import { Routes } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Framework', pathMatch: 'full' },
  { path: 'About', component: AboutComponent, title: 'About' },
  { path: 'Framework', component: FrameworkComponent, title: 'Framework' },
  { path: 'portfolio', component: PortfolioComponent, title: 'portfolio' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
];
