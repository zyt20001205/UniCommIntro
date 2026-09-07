export interface TranslationSchema {
  opening: {
    eyebrow: string;
    productName: string;
    productCategory: string;
    problemTitle: string;
    problemBody: string;
    workflow: {
      task: {
        title: string;
        detail: string;
      };
      agent: {
        title: string;
        detail: string;
      };
      lua: {
        title: string;
        detail: string;
      };
      runtime: {
        title: string;
        detail: string;
      };
      results: {
        title: string;
        detail: string;
      };
    };
    audienceTitle: string;
    audiences: {
      embedded: string;
      test: string;
      automation: string;
    };
  };
  describe: {
    eyebrow: string;
    title: string;
  };
  build: {
    eyebrow: string;
    title: string;
  };
  review: {
    eyebrow: string;
    title: string;
  };
  run: {
    eyebrow: string;
    title: string;
  };
  observe: {
    eyebrow: string;
    title: string;
  };
  workflowProgress: {
    title: string;
    steps: {
      readAttachment: string;
      understandProtocol: string;
      inspectPorts: string;
      resolveUserInput: string;
      createPort: string;
      planAndBuildWorkflow: string;
      reviewPlanAndLua: string;
      approveAndRun: string;
      traceAndEvaluate: string;
    };
  };
  narration: {
    opening: {
      product: string;
      problem: string;
      audience: string;
    };
    describe: string;
  };
}
