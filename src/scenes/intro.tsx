import {Circle, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    // Create your animations here

    // const circle = createRef<Circle>();
    //
    // view.add(<Circle ref={circle} size={320} fill={'lightseagreen'}/>);
    //
    // yield* circle().scale(2, 2).to(1, 2);

    // const rect = createRef<Rect>();
    //
    // view.add(<Rect ref={rect} width={320} height={320} fill={'lightseagreen'}/>);
    //
    // yield* waitFor(2);
    // yield* rect().scale(2, 2).to(1, 2);
    // yield* rect()
    // yield* rect().rotation(90, 2).to(0, 2).to(-90, 2);

    const txt = createRef<Txt>();
    view.add(<Txt ref={txt} text={"hello"} fill={'lightseagreen'}/>);
    yield* all(
        txt().scale(2, 0),
        txt().fill('yellow', 2),
        txt().text("unicomm", 2)
    )

    // yield* txt().scale(2, 0)
    // yield* txt().fill('yellow', 2)
    // yield* waitFor(2);
    // yield* txt().text("unicomm", 2)
});
