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
  narration: {
    opening: {
      product: string;
      problem: string;
      audience: string;
    };
  };
}
