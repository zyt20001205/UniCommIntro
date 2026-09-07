import {Layout, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, sequence, waitFor} from '@motion-canvas/core';

import i18next, {activeLocale} from '../i18n';
import {palette, typography} from '../styles/theme';

export default makeScene2D(function* (view) {
    const t = i18next.getFixedT(activeLocale);

    const product = createRef<Layout>();
    const eyebrow = createRef<Txt>();
    const productName = createRef<Txt>();
    const productCategory = createRef<Txt>();

    const problem = createRef<Layout>();
    const workflowTask = createRef<Rect>();
    const workflowAgent = createRef<Rect>();
    const workflowLua = createRef<Rect>();
    const workflowRuntime = createRef<Rect>();
    const workflowResults = createRef<Rect>();
    const workflowArrowOne = createRef<Txt>();
    const workflowArrowTwo = createRef<Txt>();
    const workflowArrowThree = createRef<Txt>();
    const workflowArrowFour = createRef<Txt>();

    const audience = createRef<Layout>();
    const audienceEmbedded = createRef<Rect>();
    const audienceTest = createRef<Rect>();
    const audienceAutomation = createRef<Rect>();

    view.fill(palette.background);
    view.add(
        <>
            <Rect
                width={1500}
                height={1500}
                x={-850}
                y={-620}
                radius={750}
                fill={palette.glowPrimary}
                opacity={0.34}
            />
            <Rect
                width={1100}
                height={1100}
                x={880}
                y={650}
                radius={550}
                fill={palette.glowSecondary}
                opacity={0.42}
            />

            <Layout ref={product} layout direction={'column'} alignItems={'center'} gap={24}>
                <Txt
                    ref={eyebrow}
                    text={t($ => $.opening.eyebrow)}
                    fontFamily={typography.family}
                    fontSize={typography.size.eyebrow}
                    fontWeight={typography.weight.bold}
                    letterSpacing={8}
                    fill={palette.accent}
                    opacity={0}
                />
                <Txt
                    ref={productName}
                    text={t($ => $.opening.productName)}
                    fontFamily={typography.family}
                    fontSize={typography.size.display}
                    fontWeight={typography.weight.bold}
                    fill={palette.text}
                    opacity={0}
                    scale={0.88}
                />
                <Txt
                    ref={productCategory}
                    text={t($ => $.opening.productCategory)}
                    fontFamily={typography.family}
                    fontSize={typography.size.tagline}
                    fill={palette.muted}
                    opacity={0}
                />
            </Layout>

            <Layout
                ref={problem}
                layout
                direction={'column'}
                alignItems={'center'}
                gap={36}
                opacity={0}
            >
                <Txt
                    text={t($ => $.opening.problemTitle)}
                    fontFamily={typography.family}
                    fontSize={typography.size.heading}
                    fontWeight={typography.weight.bold}
                    fill={palette.text}
                />
                <Txt
                    text={t($ => $.opening.problemBody)}
                    width={1320}
                    textAlign={'center'}
                    textWrap
                    fontFamily={typography.family}
                    fontSize={typography.size.body}
                    lineHeight={54}
                    fill={palette.muted}
                />
                <Layout layout alignItems={'center'} gap={16}>
                    <Rect
                        ref={workflowTask}
                        layout
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={12}
                        width={260}
                        height={172}
                        radius={24}
                        fill={palette.surface}
                        stroke={palette.muted}
                        lineWidth={2}
                        opacity={0}
                        y={40}
                    >
                        <Txt text={t($ => $.opening.workflow.task.title)} fontFamily={typography.family}
                             fontSize={typography.size.workflowTitle} fontWeight={typography.weight.bold}
                             fill={palette.text}/>
                        <Txt text={t($ => $.opening.workflow.task.detail)} fontFamily={typography.family}
                             fontSize={typography.size.workflowDetail} fill={palette.muted}/>
                    </Rect>
                    <Txt ref={workflowArrowOne} text={'→'} fontFamily={typography.family}
                         fontSize={typography.size.workflowArrow} fill={palette.muted} opacity={0} x={-12}/>
                    <Rect
                        ref={workflowAgent}
                        layout
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={12}
                        width={260}
                        height={172}
                        radius={24}
                        fill={palette.surface}
                        stroke={palette.accent}
                        lineWidth={3}
                        opacity={0}
                        y={40}
                    >
                        <Txt text={t($ => $.opening.workflow.agent.title)} fontFamily={typography.family}
                             fontSize={typography.size.workflowTitle} fontWeight={typography.weight.bold}
                             fill={palette.accent}/>
                        <Txt text={t($ => $.opening.workflow.agent.detail)} width={220} textAlign={'center'} textWrap
                             fontFamily={typography.family} fontSize={typography.size.workflowDetail}
                             fill={palette.muted}/>
                    </Rect>
                    <Txt ref={workflowArrowTwo} text={'→'} fontFamily={typography.family}
                         fontSize={typography.size.workflowArrow} fill={palette.muted} opacity={0} x={-12}/>
                    <Rect
                        ref={workflowLua}
                        layout
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={12}
                        width={260}
                        height={172}
                        radius={24}
                        fill={palette.surface}
                        stroke={palette.secondary}
                        lineWidth={3}
                        opacity={0}
                        y={40}
                    >
                        <Txt text={t($ => $.opening.workflow.lua.title)} fontFamily={typography.family}
                             fontSize={typography.size.workflowTitle} fontWeight={typography.weight.bold}
                             fill={palette.secondary}/>
                        <Txt text={t($ => $.opening.workflow.lua.detail)} width={220} textAlign={'center'} textWrap
                             fontFamily={typography.family} fontSize={typography.size.workflowDetail}
                             fill={palette.muted}/>
                    </Rect>
                    <Txt ref={workflowArrowThree} text={'→'} fontFamily={typography.family}
                         fontSize={typography.size.workflowArrow} fill={palette.muted} opacity={0} x={-12}/>
                    <Rect
                        ref={workflowRuntime}
                        layout
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={12}
                        width={260}
                        height={172}
                        radius={24}
                        fill={palette.surface}
                        stroke={palette.accent}
                        lineWidth={2}
                        opacity={0}
                        y={40}
                    >
                        <Txt text={t($ => $.opening.workflow.runtime.title)} fontFamily={typography.family}
                             fontSize={typography.size.workflowTitle} fontWeight={typography.weight.bold}
                             fill={palette.text}/>
                        <Txt text={t($ => $.opening.workflow.runtime.detail)} width={220} textAlign={'center'} textWrap
                             fontFamily={typography.family} fontSize={typography.size.workflowDetail}
                             fill={palette.muted}/>
                    </Rect>
                    <Txt ref={workflowArrowFour} text={'→'} fontFamily={typography.family}
                         fontSize={typography.size.workflowArrow} fill={palette.muted} opacity={0} x={-12}/>
                    <Rect
                        ref={workflowResults}
                        layout
                        direction={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={12}
                        width={260}
                        height={172}
                        radius={24}
                        fill={palette.surface}
                        stroke={palette.secondary}
                        lineWidth={3}
                        opacity={0}
                        y={40}
                    >
                        <Txt text={t($ => $.opening.workflow.results.title)} fontFamily={typography.family}
                             fontSize={typography.size.workflowTitle} fontWeight={typography.weight.bold}
                             fill={palette.secondary}/>
                        <Txt text={t($ => $.opening.workflow.results.detail)} width={220} textAlign={'center'} textWrap
                             fontFamily={typography.family} fontSize={typography.size.workflowDetail}
                             fill={palette.muted}/>
                    </Rect>
                </Layout>
            </Layout>

            <Layout
                ref={audience}
                layout
                direction={'column'}
                alignItems={'center'}
                gap={52}
                opacity={0}
            >
                <Txt
                    text={t($ => $.opening.audienceTitle)}
                    width={1400}
                    textAlign={'center'}
                    fontFamily={typography.family}
                    fontSize={typography.size.audienceHeading}
                    fontWeight={typography.weight.bold}
                    fill={palette.text}
                />
                <Layout layout gap={32}>
                    <Rect ref={audienceEmbedded} layout alignItems={'center'} justifyContent={'center'} width={300}
                          height={120} radius={60} fill={palette.surface} stroke={palette.accent} lineWidth={3}
                          scale={0.8} opacity={0}>
                        <Txt text={t($ => $.opening.audiences.embedded)} fontFamily={typography.family}
                             fontSize={typography.size.audiencePill} fill={palette.text}/>
                    </Rect>
                    <Rect ref={audienceTest} layout alignItems={'center'} justifyContent={'center'} width={300}
                          height={120} radius={60} fill={palette.surface} stroke={palette.accent} lineWidth={3}
                          scale={0.8} opacity={0}>
                        <Txt text={t($ => $.opening.audiences.test)} fontFamily={typography.family}
                             fontSize={typography.size.audiencePill} fill={palette.text}/>
                    </Rect>
                    <Rect ref={audienceAutomation} layout alignItems={'center'} justifyContent={'center'} width={300}
                          height={120} radius={60} fill={palette.surface} stroke={palette.accent} lineWidth={3}
                          scale={0.8} opacity={0}>
                        <Txt text={t($ => $.opening.audiences.automation)} fontFamily={typography.family}
                             fontSize={typography.size.audiencePill} fill={palette.text}/>
                    </Rect>
                </Layout>
            </Layout>
        </>,
    );

    yield* sequence(
        0.14,
        eyebrow().opacity(1, 0.5),
        all(productName().opacity(1, 0.7), productName().scale(1, 0.7)),
        productCategory().opacity(1, 0.7),
    );
    yield* waitFor(2.2);

    yield* all(product().opacity(0, 0.55), product().y(-40, 0.55));
    yield* problem().opacity(1, 0.65);
    yield* sequence(
        0.18,
        all(workflowTask().opacity(1, 0.45), workflowTask().y(0, 0.45)),
        all(workflowArrowOne().opacity(1, 0.3), workflowArrowOne().x(0, 0.3)),
        all(workflowAgent().opacity(1, 0.45), workflowAgent().y(0, 0.45)),
        all(workflowArrowTwo().opacity(1, 0.3), workflowArrowTwo().x(0, 0.3)),
        all(workflowLua().opacity(1, 0.45), workflowLua().y(0, 0.45)),
        all(workflowArrowThree().opacity(1, 0.3), workflowArrowThree().x(0, 0.3)),
        all(workflowRuntime().opacity(1, 0.45), workflowRuntime().y(0, 0.45)),
        all(workflowArrowFour().opacity(1, 0.3), workflowArrowFour().x(0, 0.3)),
        all(workflowResults().opacity(1, 0.45), workflowResults().y(0, 0.45)),
    );
    yield* waitFor(2.4);

    yield* all(problem().opacity(0, 0.55), problem().y(-40, 0.55));
    yield* audience().opacity(1, 0.65);
    yield* sequence(
        0.16,
        all(audienceEmbedded().opacity(1, 0.45), audienceEmbedded().scale(1, 0.45)),
        all(audienceTest().opacity(1, 0.45), audienceTest().scale(1, 0.45)),
        all(audienceAutomation().opacity(1, 0.45), audienceAutomation().scale(1, 0.45)),
    );
    yield* waitFor(2.8);
});
