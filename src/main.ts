/**
Author Name  :  WeblineIndia  |  https://www.weblineindia.com/
 
For more such software development components and code libraries, visit us at
https://www.weblineindia.com/communities.html
 
Our Github URL : https://github.com/weblineindia
**/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
