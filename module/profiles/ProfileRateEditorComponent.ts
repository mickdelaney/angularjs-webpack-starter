import { Profile } from '../lib/profile';

class ProfileRateEditorComponent {
    static $inject =
    [
        '$http',
        '$q',
        '$log'
    ];

    profile: Profile;

    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $log: ng.ILogService) {
    }

}

export class ProfileRateEditor implements angular.IComponentOptions {
    static selector = 'profileRateEditor';

    static template = require('./profilerateeditor.tpl.html');
    static bindings = {
        profile: '<'
    };
    static controller = ProfileRateEditorComponent;
}
