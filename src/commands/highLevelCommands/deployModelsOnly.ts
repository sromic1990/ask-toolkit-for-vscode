'use strict';

import { EXTENSION_CONFIG, OPERATION } from "../../utils/configuration";
import { composeDeployCommand } from './deployCommandBuilder';

const COMMAND_NAME = EXTENSION_CONFIG.DEFAULT_PREFIX + '.' + OPERATION.HIGH_LEVEL.DEPLOY_MODELS_ONLY.EXTENSION_REGISTERED_NAME;

export const deployModelsOnly = composeDeployCommand(COMMAND_NAME, 'model');
