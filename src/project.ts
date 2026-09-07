import {makeProject} from '@motion-canvas/core';

import opening from './scenes/01_opening?scene';
import workflow from './scenes/02_workflow?scene';

export default makeProject({
  scenes: [opening, workflow],
});
