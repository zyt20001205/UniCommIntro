import type {TranslationSchema} from '../schema';

const zhCN = {
  opening: {
    eyebrow: '产品介绍',
    productName: 'UniComm',
    productCategory: '面向设备通信与自动化的可编程桌面 IDE',
    problemTitle: '从任务到经过验证的结果',
    problemBody: 'Agent 引导 · 人工确认 · Lua 驱动',
    workflow: {
      task: {
        title: '描述',
        detail: '协议 · 目标 · 上下文',
      },
      agent: {
        title: '构建',
        detail: '询问 · 引导 · 调整',
      },
      lua: {
        title: '审查',
        detail: '计划 · Lua · 变更',
      },
      runtime: {
        title: '运行',
        detail: '权限控制执行',
      },
      results: {
        title: '观察',
        detail: '结果 · 轨迹 · 评估',
      },
    },
    audienceTitle: '为直接与真实设备协作的工程师而构建',
    audiences: {
      embedded: '嵌入式',
      test: '测试',
      automation: '自动化',
    },
  },
  describe: {
    eyebrow: '01 / 描述',
    title: '向 Agent 提供协议和目标',
  },
  build: {
    eyebrow: '02 / 构建',
    title: '与 Agent 共同补全设备上下文',
  },
  review: {
    eyebrow: '03 / 审查',
    title: '检查计划与生成的 Lua',
  },
  run: {
    eyebrow: '04 / 运行',
    title: '授权在真实设备上执行',
  },
  observe: {
    eyebrow: '05 / 观察',
    title: '追踪并评估完整执行过程',
  },
  workflowProgress: {
    title: '工作流程',
    steps: {
      readAttachment: '读取附件',
      understandProtocol: '理解协议',
      inspectPorts: '检查可用端口',
      resolveUserInput: '结合用户输入消除歧义',
      createPort: '创建已配置端口',
      planAndBuildWorkflow: '规划并构建工作流',
      reviewPlanAndLua: '审查计划与 Lua',
      approveAndRun: '授权并运行',
      traceAndEvaluate: '追踪并评估',
    },
  },
  narration: {
    opening: {
      product: 'UniComm 是一个面向设备通信与自动化的可编程桌面 IDE。',
      problem: '描述一个设备任务。UniComm 构建可审查的 Lua 工作流，在你的确认下通过已配置的端口执行，并将结果带回同一个工作区。',
      audience: '它面向直接与真实设备协作的嵌入式、测试和自动化工程师。',
    },
    describe: '从设备、协议和所需结果开始。Agent 读取附加的协议说明，并将其转化为可执行的工作上下文。',
  },
} as const satisfies TranslationSchema;

export default zhCN;
