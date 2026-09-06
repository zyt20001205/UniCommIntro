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
        detail: 'A device task',
      },
      agent: {
        title: 'Build',
        detail: 'Agent-guided workflow',
      },
      lua: {
        title: 'Review',
        detail: 'Visible Lua source',
      },
      runtime: {
        title: 'Run',
        detail: 'Approved port access',
      },
      results: {
        title: 'Observe',
        detail: 'Logs · Tables · Files',
      },
    },
    audienceTitle: 'Built for engineers working with real devices',
    audiences: {
      embedded: 'Embedded',
      test: 'Test',
      automation: 'Automation',
    },
  },
  narration: {
    opening: {
      product: 'UniComm is a programmable desktop IDE for device communication and automation.',
      problem: 'Describe a device task. UniComm builds a reviewable Lua workflow, runs it across configured ports with your approval, and brings the results back into the same workspace.',
      audience: 'It is built for embedded, test, and automation engineers working with real devices.',
    },
  },
} as const satisfies TranslationSchema;

export default enUS;
