import type {TranslationSchema} from '../schema';

const enUS = {
  opening: {
    eyebrow: 'INTRODUCING',
    productName: 'UniComm',
    productCategory: 'A programmable desktop IDE for device communication and automation',
    problemTitle: 'From task to verified result',
    problemBody: 'Agent-guided. Human-approved. Lua-powered.',
    workflow: {
      task: {
        title: 'Describe',
        detail: 'Protocol · Goal · Context',
      },
      agent: {
        title: 'Build',
        detail: 'Ask · Steer · Adapt',
      },
      lua: {
        title: 'Review',
        detail: 'Plan · Lua · Changes',
      },
      runtime: {
        title: 'Run',
        detail: 'Permission-gated execution',
      },
      results: {
        title: 'Observe',
        detail: 'Results · Trace · Eval',
      },
    },
    audienceTitle: 'Built for engineers working with real devices',
    audiences: {
      embedded: 'Embedded',
      test: 'Test',
      automation: 'Automation',
    },
  },
  describe: {
    eyebrow: '01 / DESCRIBE',
    title: 'Give the Agent the protocol and the goal',
  },
  build: {
    eyebrow: '02 / BUILD',
    title: 'Resolve the device context together',
  },
  review: {
    eyebrow: '03 / REVIEW',
    title: 'Inspect the plan and generated Lua',
  },
  run: {
    eyebrow: '04 / RUN',
    title: 'Approve execution on the real device',
  },
  observe: {
    eyebrow: '05 / OBSERVE',
    title: 'Trace and evaluate the complete run',
  },
  workflowProgress: {
    title: 'WORKFLOW',
    steps: {
      readAttachment: 'Reading attachment',
      understandProtocol: 'Understanding protocol',
      inspectPorts: 'Inspecting ports',
      resolveUserInput: 'Resolving user input',
      createPort: 'Creating port',
      planAndBuildWorkflow: 'Building Lua from plan',
      reviewPlanAndLua: 'Reviewing plan and Lua',
      approveAndRun: 'Approving and running',
      traceAndEvaluate: 'Tracing and evaluating',
    },
  },
  narration: {
    opening: {
      product: 'UniComm is a programmable desktop IDE for device communication and automation.',
      problem: 'Describe a device task. UniComm builds a reviewable Lua workflow, runs it across configured ports with your approval, and brings the results back into the same workspace.',
      audience: 'It is built for embedded, test, and automation engineers working with real devices.',
    },
    describe: 'Start with the device, its protocol, and the result you need. The Agent reads the attached specification and turns it into working context.',
  },
} as const satisfies TranslationSchema;

export default enUS;
