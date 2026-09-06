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
        detail: '设备任务',
      },
      agent: {
        title: '构建',
        detail: 'Agent 引导工作流',
      },
      lua: {
        title: '审查',
        detail: '可见的 Lua 源码',
      },
      runtime: {
        title: '运行',
        detail: '授权访问设备端口',
      },
      results: {
        title: '观察',
        detail: '日志 · 表格 · 文件',
      },
    },
    audienceTitle: '为直接与真实设备协作的工程师而构建',
    audiences: {
      embedded: '嵌入式',
      test: '测试',
      automation: '自动化',
    },
  },
  narration: {
    opening: {
      product: 'UniComm 是一个面向设备通信与自动化的可编程桌面 IDE。',
      problem: '描述一个设备任务。UniComm 构建可审查的 Lua 工作流，在你的确认下通过已配置的端口执行，并将结果带回同一个工作区。',
      audience: '它面向直接与真实设备协作的嵌入式、测试和自动化工程师。',
    },
  },
} as const satisfies TranslationSchema;

export default zhCN;
