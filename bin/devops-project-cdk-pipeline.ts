#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AWSDevOpsProjectStack } from '../lib/aws-devops-project-stack';

const app = new cdk.App();
new AWSDevOpsProjectStack(app, 'AWSDevOpsProjectStack', {
  env: { account: '648485682149', region: 'ca-central-1' },
});
