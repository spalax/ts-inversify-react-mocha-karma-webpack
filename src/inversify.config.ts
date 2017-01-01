// <reference path="../typings/index.d.ts" />

// import { Container } from "inversify";

// Injectable components
// import { Button } from "./components/Button/Button";

// export let container = new Container();
// container.bind<AjaxLoader>(TYPES.AjaxLoader).to(AjaxLoader).inSingletonScope();
// container.bind<FormView>(TYPES.FormView).to(FormView).inSingletonScope();
// container.bind<Loading>(TYPES.Loading).to(Loading).inSingletonScope();
// container.bind<LanguageChooser>(TYPES.LanguageChooser).to(LanguageChooser).inSingletonScope();
// container.bind<ContactLinks>(TYPES.ContactLinks).to(ContactLinks).inSingletonScope();
// container.bind<JoinTheHub>(TYPES.JoinTheHub).to(JoinTheHub).inSingletonScope();
//
// container.bind<MobileDetect>(TYPES.MobileDetect)
//                 .toConstantValue(new MobileDetect(window.navigator &&
//                                                     window.navigator.userAgent || ""));

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

// export {container};
