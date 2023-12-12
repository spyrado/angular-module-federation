import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Inicia a aplicação baseada nas configurações de AppModule e seus filhos
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
