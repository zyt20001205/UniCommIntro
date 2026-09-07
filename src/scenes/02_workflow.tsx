import {Layout, Rect, Txt, Video, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, delay, waitFor} from '@motion-canvas/core';

import protocolRecordingSource from '../assets/video/01_protocol_read.webm';
import connectionRecordingSource from '../assets/video/02_configuring_connection.webm';
import workflowRecordingSource from '../assets/video/03_building_workflow.webm';
import deviceExecutionRecordingSource from '../assets/video/04_device_execution.webm';
import traceRecordingSource from '../assets/video/05_execution_trace.webm';
import i18next, {activeLocale} from '../i18n';
import {palette, typography} from '../styles/theme';

export default makeScene2D(function* (view) {
    const t = i18next.getFixedT(activeLocale);

    const heading = createRef<Layout>();
    const headingEyebrow = createRef<Txt>();
    const headingTitle = createRef<Txt>();
    const viewport = createRef<Rect>();
    const protocolRecording = createRef<Video>();
    const connectionRecording = createRef<Video>();
    const workflowRecording = createRef<Video>();
    const deviceExecutionRecording = createRef<Video>();
    const traceRecording = createRef<Video>();
    const progressLine = createRef<Rect>();

    const workflowSteps = [
        t($ => $.workflowProgress.steps.readAttachment),
        t($ => $.workflowProgress.steps.understandProtocol),
        t($ => $.workflowProgress.steps.inspectPorts),
        t($ => $.workflowProgress.steps.resolveUserInput),
        t($ => $.workflowProgress.steps.createPort),
        t($ => $.workflowProgress.steps.planAndBuildWorkflow),
        t($ => $.workflowProgress.steps.reviewPlanAndLua),
        t($ => $.workflowProgress.steps.approveAndRun),
        t($ => $.workflowProgress.steps.traceAndEvaluate),
    ];
    const stepDots = workflowSteps.map(() => createRef<Rect>());
    const stepLabels = workflowSteps.map(() => createRef<Txt>());

    const firstStepY = -356;
    const stepGap = 89;
    const trackHeight = stepGap * (workflowSteps.length - 1);
    const userInputTimestamp = 16;
    const workflowPermissionTimestamp = 82;

    view.fill(palette.background);
    view.add(
        <>
            <Rect
                width={1300}
                height={1300}
                x={-900}
                y={-680}
                radius={650}
                fill={palette.glowPrimary}
                opacity={0.3}
            />
            <Rect
                width={900}
                height={900}
                x={960}
                y={650}
                radius={450}
                fill={palette.glowSecondary}
                opacity={0.34}
            />

            <Layout
                layout
                width={1840}
                height={1000}
                gap={32}
                alignItems={'stretch'}
            >
                <Layout
                    layout
                    direction={'column'}
                    width={1408}
                    height={'100%'}
                    gap={20}
                    justifyContent={'center'}
                >
                    <Layout
                        ref={heading}
                        layout
                        width={'100%'}
                        height={80}
                        alignItems={'center'}
                        paddingLeft={24}
                        gap={26}
                        opacity={0}
                    >
                        <Txt
                            ref={headingEyebrow}
                            text={t($ => $.describe.eyebrow)}
                            fontFamily={typography.family}
                            fontSize={typography.size.eyebrow}
                            fontWeight={typography.weight.bold}
                            letterSpacing={4}
                            fill={palette.accent}
                        />
                        <Txt
                            ref={headingTitle}
                            text={t($ => $.describe.title)}
                            fontFamily={typography.family}
                            fontSize={32}
                            fontWeight={typography.weight.bold}
                            fill={palette.text}
                        />
                    </Layout>

                    <Rect
                        ref={viewport}
                        width={'100%'}
                        height={792}
                        radius={28}
                        clip
                        fill={'#171a20'}
                        stroke={palette.accent}
                        lineWidth={3}
                        opacity={0}
                        scale={0.94}
                        shadowColor={'#00000080'}
                        shadowBlur={36}
                    >
                        <Video
                            ref={protocolRecording}
                            layout={false}
                            src={protocolRecordingSource}
                            width={1408}
                            height={792}
                            smoothing
                        />
                        <Video
                            ref={connectionRecording}
                            layout={false}
                            src={connectionRecordingSource}
                            width={1408}
                            height={792}
                            opacity={0}
                            smoothing
                        />
                        <Video
                            ref={workflowRecording}
                            layout={false}
                            src={workflowRecordingSource}
                            width={1408}
                            height={792}
                            opacity={0}
                            smoothing
                        />
                        <Video
                            ref={deviceExecutionRecording}
                            layout={false}
                            src={deviceExecutionRecordingSource}
                            width={1408}
                            height={792}
                            opacity={0}
                            smoothing
                        />
                        <Video
                            ref={traceRecording}
                            layout={false}
                            src={traceRecordingSource}
                            width={1408}
                            height={792}
                            opacity={0}
                            smoothing
                        />
                    </Rect>
                </Layout>

                <Rect
                    layout
                    direction={'column'}
                    width={400}
                    height={'100%'}
                    padding={32}
                    gap={20}
                    radius={30}
                    fill={palette.surface}
                    stroke={'#26344d'}
                    lineWidth={2}
                    shadowColor={'#00000070'}
                    shadowBlur={30}
                >
                    <Layout
                        layout
                        width={'100%'}
                        height={54}
                        alignItems={'center'}
                    >
                        <Txt
                            text={t($ => $.workflowProgress.title)}
                            fontFamily={typography.family}
                            fontSize={22}
                            fontWeight={typography.weight.bold}
                            letterSpacing={5}
                            fill={palette.accent}
                        />
                    </Layout>

                    <Rect width={'100%'} grow={1}>
                        <Rect
                            layout={false}
                            width={4}
                            height={trackHeight}
                            x={-142}
                            y={firstStepY + trackHeight / 2}
                            radius={2}
                            fill={'#26344d'}
                        />
                        <Rect
                            ref={progressLine}
                            layout={false}
                            width={6}
                            height={4}
                            x={-142}
                            y={firstStepY}
                            radius={3}
                            fill={palette.accent}
                        />

                        {workflowSteps.map((step, index) => (
                            <Rect
                                layout={false}
                                width={360}
                                height={70}
                                y={firstStepY + index * stepGap}
                            >
                                <Rect
                                    ref={stepDots[index]}
                                    width={index === 0 ? 24 : 16}
                                    height={index === 0 ? 24 : 16}
                                    x={-142}
                                    radius={17}
                                    fill={index === 0 ? palette.secondary : '#26344d'}
                                    stroke={index === 0 ? palette.secondary : '#26344d'}
                                    lineWidth={3}
                                />
                                <Txt
                                    ref={stepLabels[index]}
                                    text={step}
                                    x={20}
                                    width={270}
                                    fontFamily={typography.family}
                                    fontSize={22}
                                    fontWeight={
                                        index === 0
                                            ? typography.weight.bold
                                            : typography.weight.regular
                                    }
                                    fill={index === 0 ? palette.text : palette.muted}
                                    opacity={index === 0 ? 1 : 0.42}
                                />
                            </Rect>
                        ))}
                    </Rect>
                </Rect>
            </Layout>
        </>,
    );

    protocolRecording().seek(0.5);
    protocolRecording().playbackRate(1.4);
    protocolRecording().play();

    yield* all(
        heading().opacity(1, 0.55),
        viewport().opacity(1, 0.7),
        viewport().scale(1, 0.7),
    );
    yield* waitFor(2.4);

    yield* all(
        protocolRecording().scale(1.7, 0.8),
        protocolRecording().position([250, 220], 0.8),
    );
    yield* waitFor(1.8);

    yield* all(
        protocolRecording().scale(1, 0.8),
        protocolRecording().position([0, 0], 0.8),
    );
    yield* waitFor(2.8);

    yield* all(
        protocolRecording().scale(3, 0.8),
        protocolRecording().position([-1450, -800], 0.8),
    );
    yield* waitFor(2.2);

    protocolRecording().playbackRate(1);
    yield* all(
        protocolRecording().scale(1.8, 0.8),
        protocolRecording().position([-800, 400], 0.8).to([-800, -300], 7),
        viewport().opacity(1, 0.12),
        progressLine().height(stepGap, 0.55),
        progressLine().y(firstStepY + stepGap / 2, 0.55),
        stepDots[0]().size(16, 0.4),
        stepDots[0]().fill(palette.accent, 0.4),
        stepDots[0]().stroke(palette.accent, 0.4),
        stepLabels[0]().fill(palette.accent, 0.4),
        stepDots[1]().size(24, 0.45),
        stepDots[1]().fill(palette.secondary, 0.45),
        stepDots[1]().stroke(palette.secondary, 0.45),
        stepLabels[1]().opacity(1, 0.4),
        stepLabels[1]().fill(palette.text, 0.4),
        stepLabels[1]().fontWeight(typography.weight.bold, 0.4),
    );

    yield* all(
        protocolRecording().scale(3, 0.8),
        protocolRecording().position([-1450, -800], 0.8),
    );
    yield* waitFor(
        Math.max(
            0,
            protocolRecording().getDuration() - protocolRecording().getCurrentTime() - 2,
        ),
    );

    protocolRecording().pause();
    connectionRecording().seek(2);
    connectionRecording().playbackRate(1.4);
    connectionRecording().scale(protocolRecording().scale());
    connectionRecording().position(protocolRecording().position());
    connectionRecording().opacity(1);
    protocolRecording().opacity(0);
    connectionRecording().play();

    yield* all(
        headingEyebrow().text(t($ => $.build.eyebrow), 0.55),
        headingTitle().text(t($ => $.build.title), 0.55),
        progressLine().height(stepGap * 2, 0.55),
        progressLine().y(firstStepY + stepGap, 0.55),
        stepDots[1]().size(16, 0.4),
        stepDots[1]().fill(palette.accent, 0.4),
        stepDots[1]().stroke(palette.accent, 0.4),
        stepLabels[1]().fill(palette.accent, 0.4),
        stepDots[2]().size(24, 0.45),
        stepDots[2]().fill(palette.secondary, 0.45),
        stepDots[2]().stroke(palette.secondary, 0.45),
        stepLabels[2]().opacity(1, 0.4),
        stepLabels[2]().fill(palette.text, 0.4),
        stepLabels[2]().fontWeight(typography.weight.bold, 0.4),
    );
    yield* waitFor(
        Math.max(
            0,
            userInputTimestamp - connectionRecording().getCurrentTime(),
        ),
    );

    yield* all(
        progressLine().height(stepGap * 3, 0.55),
        progressLine().y(firstStepY + stepGap * 1.5, 0.55),
        stepDots[2]().size(16, 0.4),
        stepDots[2]().fill(palette.accent, 0.4),
        stepDots[2]().stroke(palette.accent, 0.4),
        stepLabels[2]().fill(palette.accent, 0.4),
        stepDots[3]().size(24, 0.45),
        stepDots[3]().fill(palette.secondary, 0.45),
        stepDots[3]().stroke(palette.secondary, 0.45),
        stepLabels[3]().opacity(1, 0.4),
        stepLabels[3]().fill(palette.text, 0.4),
        stepLabels[3]().fontWeight(typography.weight.bold, 0.4),
    );

    yield* all(
        connectionRecording().scale(1, 0.8),
        connectionRecording().position([0, 0], 0.8),
    );
    yield* waitFor(8)

    yield* all(
        connectionRecording().scale(2, 0.8),
        connectionRecording().position([800, 500], 0.8),
    );
    yield* waitFor(2)

    yield* all(
        connectionRecording().scale(1.8, 0.8),
        connectionRecording().position([-800, -200], 0.8),
        progressLine().height(stepGap * 4, 0.55),
        progressLine().y(firstStepY + stepGap * 2, 0.55),
        stepDots[3]().size(16, 0.4),
        stepDots[3]().fill(palette.accent, 0.4),
        stepDots[3]().stroke(palette.accent, 0.4),
        stepLabels[3]().fill(palette.accent, 0.4),
        stepDots[4]().size(24, 0.45),
        stepDots[4]().fill(palette.secondary, 0.45),
        stepDots[4]().stroke(palette.secondary, 0.45),
        stepLabels[4]().opacity(1, 0.4),
        stepLabels[4]().fill(palette.text, 0.4),
        stepLabels[4]().fontWeight(typography.weight.bold, 0.4),
    );
    yield* waitFor(4)

    yield* all(
        connectionRecording().scale(3, 0.8),
        connectionRecording().position([-1450, -800], 0.8),
    )
    yield* waitFor(
        Math.max(
            0,
            connectionRecording().getDuration() - connectionRecording().getCurrentTime(),
        ),
    );
    connectionRecording().pause();

    workflowRecording().seek(0);
    workflowRecording().playbackRate(2.0);
    workflowRecording().scale(connectionRecording().scale());
    workflowRecording().position(connectionRecording().position());
    workflowRecording().opacity(1);
    connectionRecording().opacity(0);
    workflowRecording().play();
    yield* all(
        waitFor(2),
        headingEyebrow().text(t($ => $.review.eyebrow), 0.55),
        headingTitle().text(t($ => $.review.title), 0.55),
        progressLine().height(stepGap * 5, 0.55),
        progressLine().y(firstStepY + stepGap * 2.5, 0.55),
        stepDots[4]().size(16, 0.4),
        stepDots[4]().fill(palette.accent, 0.4),
        stepDots[4]().stroke(palette.accent, 0.4),
        stepLabels[4]().fill(palette.accent, 0.4),
        stepDots[5]().size(24, 0.45),
        stepDots[5]().fill(palette.secondary, 0.45),
        stepDots[5]().stroke(palette.secondary, 0.45),
        stepLabels[5]().opacity(1, 0.4),
        stepLabels[5]().fill(palette.text, 0.4),
        stepLabels[5]().fontWeight(typography.weight.bold, 0.4),
    )

    yield* all(
        workflowRecording().scale(1, 0.8),
        workflowRecording().position([0, 0], 0.8),
    )
    yield* waitFor(32)

    yield* all(
        workflowRecording().scale(1.8, 0.8),
        workflowRecording().position([-800, -200], 0.8),
        progressLine().height(stepGap * 6, 0.55),
        progressLine().y(firstStepY + stepGap * 3, 0.55),
        stepDots[5]().size(16, 0.4),
        stepDots[5]().fill(palette.accent, 0.4),
        stepDots[5]().stroke(palette.accent, 0.4),
        stepLabels[5]().fill(palette.accent, 0.4),
        stepDots[6]().size(24, 0.45),
        stepDots[6]().fill(palette.secondary, 0.45),
        stepDots[6]().stroke(palette.secondary, 0.45),
        stepLabels[6]().opacity(1, 0.4),
        stepLabels[6]().fill(palette.text, 0.4),
        stepLabels[6]().fontWeight(typography.weight.bold, 0.4),
    )
    yield* all(
        waitFor(
            Math.max(
                0,
                workflowRecording().getDuration() -
                workflowRecording().getCurrentTime() -
                6,
            ),
        ),
        delay(
            Math.max(
                0,
                (workflowPermissionTimestamp -
                    workflowRecording().getCurrentTime()) /
                workflowRecording().playbackRate(),
            ),
            all(
                headingEyebrow().text(t($ => $.run.eyebrow), 0.55),
                headingTitle().text(t($ => $.run.title), 0.55),
                progressLine().height(stepGap * 7, 0.55),
                progressLine().y(firstStepY + stepGap * 3.5, 0.55),
                stepDots[6]().size(16, 0.4),
                stepDots[6]().fill(palette.accent, 0.4),
                stepDots[6]().stroke(palette.accent, 0.4),
                stepLabels[6]().fill(palette.accent, 0.4),
                stepDots[7]().size(24, 0.45),
                stepDots[7]().fill(palette.secondary, 0.45),
                stepDots[7]().stroke(palette.secondary, 0.45),
                stepLabels[7]().opacity(1, 0.4),
                stepLabels[7]().fill(palette.text, 0.4),
                stepLabels[7]().fontWeight(typography.weight.bold, 0.4),
            ),
        ),
    );
    workflowRecording().pause();

    deviceExecutionRecording().seek(2.5);
    deviceExecutionRecording().playbackRate(1);
    deviceExecutionRecording().scale(workflowRecording().scale());
    deviceExecutionRecording().position(workflowRecording().position());
    deviceExecutionRecording().opacity(1);
    workflowRecording().opacity(0);
    deviceExecutionRecording().play();
    yield* waitFor(1)

    yield* all(
        deviceExecutionRecording().scale(1.2, 0.8),
        deviceExecutionRecording().position([0, 0], 0.8),
    )
    yield* waitFor(
        Math.max(
            0,
            deviceExecutionRecording().getDuration() - deviceExecutionRecording().getCurrentTime() - 4,
        ),
    );
    deviceExecutionRecording().pause();

    traceRecording().seek(0.3);
    traceRecording().playbackRate(1);
    traceRecording().scale(deviceExecutionRecording().scale());
    traceRecording().position(deviceExecutionRecording().position());
    traceRecording().opacity(1);
    deviceExecutionRecording().opacity(0);

    yield* all(
        traceRecording().scale(3, 0.8),
        traceRecording().position([-1450, 800], 0.8),
        headingEyebrow().text(t($ => $.observe.eyebrow), 0.55),
        headingTitle().text(t($ => $.observe.title), 0.55),
        progressLine().height(stepGap * 8, 0.55),
        progressLine().y(firstStepY + stepGap * 4, 0.55),
        stepDots[7]().size(16, 0.4),
        stepDots[7]().fill(palette.accent, 0.4),
        stepDots[7]().stroke(palette.accent, 0.4),
        stepLabels[7]().fill(palette.accent, 0.4),
        stepDots[8]().size(24, 0.45),
        stepDots[8]().fill(palette.secondary, 0.45),
        stepDots[8]().stroke(palette.secondary, 0.45),
        stepLabels[8]().opacity(1, 0.4),
        stepLabels[8]().fill(palette.text, 0.4),
        stepLabels[8]().fontWeight(typography.weight.bold, 0.4),
    )
    yield* waitFor(1)
    traceRecording().play();

    yield* all(
        traceRecording().scale(1.4, 0.8),
        traceRecording().position([200, 50], 0.8),
    )
    yield* waitFor(
        Math.max(
            0,
            traceRecording().getDuration() - traceRecording().getCurrentTime(),
        ),
    );
    traceRecording().pause();
});
