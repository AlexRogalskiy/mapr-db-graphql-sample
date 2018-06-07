import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomePage} from "./pages/home-page/home-page.component";
import {ArtistsPageComponent} from "./pages/artists-page/artists-page.component";
import {AlbumDetailPage} from "./pages/album-detail-page/album-detail-page.component";
import {ArtistPage} from "./pages/artist-detail-page/artist-detail-page.component";
import {NotFoundPage} from "./pages/not-found-page/not-found-page.component";
import {ReportingPage} from "./pages/reporting-page/reporting-page.component";
import {AddAlbumPage} from "./pages/add-album-page/add-album-page.component";
import {EditAlbumPage} from "./pages/edit-album-page/edit-album-page.component";
import {AppBar} from "./components/app-bar-component/app-bar.component";
import {AlbumEditForm} from "./components/album-edit-form-component/album-edit-form.component";
import {LoginPage} from "./pages/login-page/login-page.component";

import {FormsModule} from "@angular/forms";
import {AuthenticatedGuard} from "./guards/authenticated.guard";
import {AddArtistPage} from "./pages/add-artist-page/add-artist-page.component";
import {ArtistEditForm} from "./components/artist-edit-form-component/artist-edit-form.component";
import {EditArtistPage} from "./pages/edit-artist-page/edit-artist-page.component";
import {SearchResultsPage} from "./pages/search-results-page/search-results-page.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'album/edit/:albumSlug',
    component: EditAlbumPage,
    canActivate: [
      AuthenticatedGuard
    ]
  },
  {
    path: 'album/:albumSlug',
    component: AlbumDetailPage
  },
  {
    path: 'reporting',
    component: ReportingPage
  },
  {
    path: 'artists',
    component: ArtistsPageComponent
  },
  {
    path: 'artist/:artistSlug',
    component: ArtistPage
  },
  {
    path: 'add/album',
    component: AddAlbumPage,
    canActivate: [
      AuthenticatedGuard
    ]
  },
  {
    path: 'add/artist',
    component: AddArtistPage,
    canActivate: [
      AuthenticatedGuard
    ]
  },
  {
    path: 'artist/edit/:artistSlug',
    component: EditArtistPage,
    canActivate: [
      AuthenticatedGuard
    ]
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'search',
    component: SearchResultsPage
  },
  {
    path: '**',
    component: NotFoundPage
  }
];

@NgModule({
  declarations: [
    HomePage,
    NotFoundPage,
    ReportingPage,
    ArtistsPageComponent,
    AlbumDetailPage,
    ArtistPage,
    AppBar,
    AlbumEditForm,
    ArtistEditForm,
    AddArtistPage,
    AddAlbumPage,
    EditAlbumPage,
    EditArtistPage,
    LoginPage,
    SearchResultsPage
  ],
  imports: [
    FormsModule,
    NgbModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
