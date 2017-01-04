// <reference path="../typings/index.d.ts" />
"use strict";
var inversify_1 = require("inversify");
require("reflect-metadata");
var inversify_inject_decorators_1 = require("inversify-inject-decorators");
// Injectable components
var ReactDOM = require("react-dom");
exports.container = new inversify_1.Container(), exports.lazyInject = (_a = inversify_inject_decorators_1.default(exports.container), _a.lazyInject), exports.lazyInjectNamed = _a.lazyInjectNamed;
// container.bind<FormView>(TYPES.FormView).to(FormView).inSingletonScope();
// container.bind<Loading>(TYPES.Loading).to(Loading).inSingletonScope();
// container.bind<LanguageChooser>(TYPES.LanguageChooser).to(LanguageChooser).inSingletonScope();
// container.bind<ContactLinks>(TYPES.ContactLinks).to(ContactLinks).inSingletonScope();
// container.bind<JoinTheHub>(TYPES.JoinTheHub).to(JoinTheHub).inSingletonScope();
//
exports.container.bind("ReactDOM").toConstantValue(ReactDOM);
var _a;
// container.bind<interfaces.Factory<TimelineMax>>("Factory<TimelineMax>")
//          .toAutoFactory<TimelineMax>("Factory<TimelineMax>");
// container.bind<interfaces.Factory<Timeline>>("Factory<Timeline>").toFactory<Timeline>((context: interfaces.Context) => {
//     return (...args) => {
//         console.log(context);
//         return new TimelineMax(...args);
//     };
// });
// container.bind<interfaces.Factory<TimelineMax>>("Factory<TimelineMax>")
//          .toAutoFactory<TimelineMax>("TimelineMax");
//# sourceMappingURL=inversify.config.js.map