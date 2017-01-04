// <reference path="../typings/index.d.ts" />

import { Container, decorate, injectable } from "inversify";
import "reflect-metadata";
import getDecorators from "inversify-inject-decorators";

// Injectable components
import * as ReactDOM from "react-dom";

export let container = new Container(),
           {lazyInject, lazyInjectNamed} = getDecorators(container);

// container.bind<FormView>(TYPES.FormView).to(FormView).inSingletonScope();
// container.bind<Loading>(TYPES.Loading).to(Loading).inSingletonScope();
// container.bind<LanguageChooser>(TYPES.LanguageChooser).to(LanguageChooser).inSingletonScope();
// container.bind<ContactLinks>(TYPES.ContactLinks).to(ContactLinks).inSingletonScope();
// container.bind<JoinTheHub>(TYPES.JoinTheHub).to(JoinTheHub).inSingletonScope();
//
container.bind("ReactDOM").toConstantValue(ReactDOM);

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
