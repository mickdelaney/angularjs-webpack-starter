import * as angular from 'angular';

import { ProfileRateEditor } from './ProfileRateEditorComponent';

export const moduleName = angular.module('profiles', [
      'ui.router'
])
.component(ProfileRateEditor.selector, ProfileRateEditor);
