import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GuidesComponent } from './guides/guides.component';

export const routes: Routes = [
    { path: 'blog', component: BlogsComponent },
    { path: 'contact', component: ContactsComponent },
    { path: 'guide', component: GuidesComponent },
    { path: '', component: HomeComponent }
];
